import { useEffect, useRef } from "react";

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px 0px -40px 0px",
  threshold: 0.05,
  once: true,
};

const isInViewportSimple = (el) => {
  if (!el || typeof el.getBoundingClientRect !== "function") return true;
  const rect = el.getBoundingClientRect();
  const vh =
    window.innerHeight || document.documentElement.clientHeight || 0;
  const vw =
    window.innerWidth || document.documentElement.clientWidth || 0;
  const topVisible = rect.top >= 0 && rect.top <= vh;
  const bottomVisible = rect.bottom >= 0 && rect.bottom <= vh + 200;
  const leftVisible = rect.left >= 0 && rect.left <= vw;
  const rightVisible = rect.right >= 0 && rect.right <= vw;
  const verticallyInside = topVisible || bottomVisible;
  const horizontallyInside = leftVisible || rightVisible;
  const areaVisible =
    rect.top <= vh * 0.95 && rect.bottom >= -vh * 0.1;
  return (verticallyInside && horizontallyInside) || areaVisible;
};

const useAOS = ({
  animation = "fade-up",
  delay = 0,
  duration = 700,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  offset = null,
  once = true,
  threshold,
} = {}) => {
  const ref = useRef(null);
  const revealed = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const baseClass = "aos";
    const animClass = `aos-${animation}`;
    node.classList.add(baseClass, animClass);

    node.style.setProperty("--aos-duration", `${duration}ms`);
    node.style.setProperty("--aos-delay", `${delay}ms`);
    node.style.setProperty("--aos-easing", easing);

    const reveal = () => {
      if (revealed.current) return;
      revealed.current = true;
      node.classList.add("aos-animate");
    };

    const hide = () => {
      if (once) return;
      revealed.current = false;
      node.classList.remove("aos-animate");
    };

    if (typeof window === "undefined" || typeof IntersectionObserver !== "function") {
      reveal();
      return undefined;
    }

    const observerOptions = {
      root: DEFAULT_OPTIONS.root,
      rootMargin: offset ? offset : DEFAULT_OPTIONS.rootMargin,
      threshold: threshold !== undefined ? threshold : DEFAULT_OPTIONS.threshold,
    };

    let observer = null;
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            if (once) {
              observer && observer.unobserve(entry.target);
            }
          } else if (!once) {
            hide();
          }
        });
      }, observerOptions);
      observer.observe(node);
    } catch (err) {
      reveal();
    }

    let raf1 = 0;
    let raf2 = 0;
    let timeoutId = 0;

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        if (isInViewportSimple(node)) {
          reveal();
        }
      });
    });

    const totalDelay = Math.max(delay + duration + 300, 900);
    timeoutId = window.setTimeout(() => {
      reveal();
    }, totalDelay);

    const handleFirstInteraction = () => {
      reveal();
      window.removeEventListener("scroll", handleFirstInteraction, true);
      window.removeEventListener("resize", handleFirstInteraction);
      document.removeEventListener("visibilitychange", handleFirstInteraction);
    };
    window.addEventListener("scroll", handleFirstInteraction, true);
    window.addEventListener("resize", handleFirstInteraction);
    document.addEventListener("visibilitychange", handleFirstInteraction);

    return () => {
      if (observer) {
        try { observer.disconnect(); } catch (e) { /* noop */ }
      }
      if (raf1) window.cancelAnimationFrame(raf1);
      if (raf2) window.cancelAnimationFrame(raf2);
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleFirstInteraction, true);
      window.removeEventListener("resize", handleFirstInteraction);
      document.removeEventListener("visibilitychange", handleFirstInteraction);
    };
  }, [animation, delay, duration, easing, once, threshold, offset]);

  return ref;
};

export default useAOS;
