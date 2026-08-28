import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Cpu,
  GitBranch,
  Lightbulb,
  Users,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  User,
  Hash,
  Mail,
  Phone,
  Calendar,
  Layers,
  Lock,
  ShieldCheck,
  AlertCircle,
  X,
  FileCode,
  Rocket,
} from "lucide-react";
import { PiEyesFill, PiEyeClosedFill } from "react-icons/pi";

import Button from "../components/common/Button";
import clubApexLogo from "../assets/apex_club_logo.png";

import "../styles/signup.css";

const YEARS = [
  "First Year (FE)",
  "Second Year (SE)",
  "Third Year (TE)",
  "Fourth Year (BE)",
];

const BRANCHES = [
  "Civil Engineering",
  "Computer Engineering",
  "Computer Science & Engineering (Data Science)",
  "Computer Science & Engineering (AI & ML)",
  "Electrical Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "B. Tech. + MBA (Computer Engineering)",
  "B. Tech. + MBA (AI & ML)",
  "B. Tech. + MBA (Data Science)",
  "B. Tech. + MBA (Information Technology)",
];

const INITIAL_FORM = {
  name: "",
  prn: "",
  email: "",
  phone: "",
  year: "",
  branch: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_ERRORS = {
  name: "",
  prn: "",
  email: "",
  phone: "",
  year: "",
  branch: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_TOUCHED = {
  name: false,
  prn: false,
  email: false,
  phone: false,
  year: false,
  branch: false,
  password: false,
  confirmPassword: false,
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
};

const Typewriter = ({ text, speed = 70 }) => {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reduced ? text : "");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (reduced) return;
    if (display.length >= text.length) return;
    const t = setTimeout(() => {
      setDisplay(text.slice(0, display.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [display, text, speed, reduced]);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <h1 className="signup-welcome-title">
      <span className="signup-welcome-title-main">Welcome to</span>{" "}
      <span className="signup-welcome-title-accent">
        {display}
        <span
          className={`signup-typewriter-cursor ${
            cursor ? "signup-cursor-visible" : ""
          }`}
          aria-hidden="true"
        >
          |
        </span>
      </span>
    </h1>
  );
};

const validateField = (name, value, allValues) => {
  switch (name) {
    case "name": {
      if (!value.trim()) return "Please enter your full name.";
      const trimmed = value.trim();
      const words = trimmed.split(/\s+/).filter(Boolean);
      if (words.length < 2)
        return "Name must include first and last name (2–3 words).";
      if (words.length > 3)
        return "Name should be at most 3 words (first, middle, last).";
      if (!/^[A-Za-z\u00C0-\u024F'’\-\s]+$/.test(trimmed))
        return "Name can only contain letters, hyphens, and apostrophes.";
      if (trimmed.length < 3) return "Name is too short.";
      return "";
    }
    case "prn": {
      if (!value.trim()) return "Please enter your PRN number.";
      const v = value.trim();
      if (!/^\d+$/.test(v)) return "PRN must contain digits only (0–9).";
      if (v.length < 9)
        return `PRN is too short — needs ${9 - v.length} more digit(s).`;
      if (v.length > 15) return "PRN must not exceed 15 digits.";
      return "";
    }
    case "email": {
      if (!value.trim()) return "Please enter your personal email address.";
      const v = value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        return "Enter a valid email (e.g. yourname@gmail.com).";
      if (/^[^\s@]+@nmims\.in$/i.test(v))
        return "Use a personal email — institute email not allowed here.";
      return "";
    }
    case "phone": {
      if (!value.trim()) return "Please enter your phone number.";
      const digits = value.replace(/\D/g, "");
      if (!/^\d+$/.test(digits))
        return "Phone number can contain digits and spaces only.";
      if (digits.length !== 10)
        return `Phone must be 10 digits (currently ${digits.length}).`;
      if (!/^[6-9]/.test(digits))
        return "Indian mobile must start with 6, 7, 8, or 9.";
      return "";
    }
    case "year":
      if (!value) return "Please select your year of study.";
      return "";
    case "branch":
      if (!value) return "Please select your branch / department.";
      return "";
    case "password": {
      if (!value) return "Please create a password.";
      if (value.length < 8)
        return `Password too short — add ${8 - value.length} more char(s).`;
      if (value.length > 12)
        return `Password too long — remove ${value.length - 12} char(s).`;
      const issues = [];
      if (!/[a-z]/.test(value)) issues.push("one lowercase letter");
      if (!/[A-Z]/.test(value)) issues.push("one uppercase letter");
      if (!/\d/.test(value)) issues.push("one digit");
      if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(value))
        issues.push("one special character");
      if (issues.length > 0)
        return `Still missing: ${issues.join(", ")}.`;
      return "";
    }
    case "confirmPassword": {
      if (!value) return "Please confirm your password.";
      if (value !== allValues.password)
        return "Passwords do not match — please re-type carefully.";
      return "";
    }
    default:
      return "";
  }
};

const FIELDS_STEP_1 = ["name", "prn", "email", "phone", "year", "branch"];
const FIELDS_STEP_2 = ["password", "confirmPassword"];

/* =========================================================
   STACKED INPUT / SELECT — OUTSIDE LABEL (zoom-pop on hover/focus)
   ========================================================= */

const OutsideInput = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  icon: Icon,
  placeholder,
  autoComplete,
  rightSlot,
  hideError = false,
}) => {
  const hasError = touched && !!error;
  const isValid = touched && !error && !!value;
  return (
    <div
      className={`signup-field-wrapper ${
        hasError ? "signup-wrapper-error" : ""
      } ${isValid ? "signup-wrapper-valid" : ""}`}
    >
      <label htmlFor={id} className="signup-stacked-label">
        {Icon && (
          <span className="signup-stacked-label-icon" aria-hidden="true">
            <Icon size={14} strokeWidth={2.1} />
          </span>
        )}
        {label}
      </label>
      <div
        className={`signup-stacked-field ${
          hasError ? "signup-field-error" : ""
        } ${isValid ? "signup-field-valid" : ""}`}
      >
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="signup-stacked-input"
          autoComplete={autoComplete}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? `${id}-error` : undefined}
          placeholder={placeholder}
        />
        {rightSlot}
      </div>
      {!hideError && hasError && (
        <p id={`${id}-error`} className="signup-field-error-text" role="alert">
          <AlertCircle size={12} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

const PasswordEyes = ({ open }) => (
  <span className={`signup-eyes-pair ${open ? "is-open" : "is-closed"}`} aria-hidden="true">
    {open ? (
      <PiEyesFill size={22} />
    ) : (
      <>
        <PiEyeClosedFill size={16} />
        <PiEyeClosedFill size={16} />
      </>
    )}
  </span>
);

const OutsideSelect = ({
  id,
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  icon: Icon,
  options,
  placeholder = "Select an option",
}) => {
  const hasError = touched && !!error;
  const isValid = touched && !error && !!value;
  return (
    <div
      className={`signup-field-wrapper ${
        hasError ? "signup-wrapper-error" : ""
      } ${isValid ? "signup-wrapper-valid" : ""}`}
    >
      <label htmlFor={id} className="signup-stacked-label">
        {Icon && (
          <span className="signup-stacked-label-icon" aria-hidden="true">
            <Icon size={14} strokeWidth={2.1} />
          </span>
        )}
        {label}
      </label>
      <div
        className={`signup-stacked-field ${
          hasError ? "signup-field-error" : ""
        } ${isValid ? "signup-field-valid" : ""}`}
      >
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="signup-stacked-input signup-stacked-select"
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? `${id}-error` : undefined}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="signup-field-caret" aria-hidden="true">
          ▾
        </span>
      </div>
      {hasError && (
        <p id={`${id}-error`} className="signup-field-error-text" role="alert">
          <AlertCircle size={12} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

const ProgressIndicator = ({ step }) => {
  const steps = [
    { key: 1, label: "Personal Details" },
    { key: 2, label: "Account" },
  ];

  return (
    <div className="signup-progress" aria-label="Registration progress">
      {steps.map((s, idx) => {
        const isDone = step > s.key;
        const isActive = step === s.key;
        return (
          <React.Fragment key={s.key}>
            <div className="signup-progress-step">
              <div
                className={`signup-progress-dot ${
                  isDone
                    ? "signup-progress-dot-done"
                    : isActive
                      ? "signup-progress-dot-active"
                      : ""
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {isDone ? (
                  <Check size={14} strokeWidth={3} />
                ) : (
                  <span>{s.key}</span>
                )}
              </div>
              <span
                className={`signup-progress-label ${
                  isActive || isDone ? "signup-progress-label-active" : ""
                }`}
              >
                {s.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`signup-progress-line ${
                  isDone ? "signup-progress-line-done" : ""
                }`}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

/* =========================================================
   PASSWORD CHECKS + PREMIUM REQUIREMENT GRID
   ========================================================= */

const PASSWORD_CHECKS = [
  {
    key: "length",
    label: "8–12 characters",
    test: (v) => v.length >= 8 && v.length <= 12,
  },
  {
    key: "lower",
    label: "One lowercase",
    test: (v) => /[a-z]/.test(v),
  },
  {
    key: "upper",
    label: "One uppercase",
    test: (v) => /[A-Z]/.test(v),
  },
  {
    key: "digit",
    label: "One digit",
    test: (v) => /\d/.test(v),
  },
  {
    key: "special",
    label: "One special char",
    test: (v) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(v),
  },
];

const passwordLevel = (value) => {
  const passed = PASSWORD_CHECKS.filter((c) => c.test(value)).length;
  if (passed >= 5) return 3;
  if (passed >= 3) return 2;
  if (passed >= 1) return 1;
  return 0;
};

const PasswordStrengthLoaders = ({ value }) => {
  if (!value) return null;
  const level = passwordLevel(value);
  const segments = [
    { key: "weak", label: "Weak", active: level >= 1 },
    { key: "fair", label: "Fair", active: level >= 2 },
    { key: "strong", label: "Strong", active: level >= 3 },
  ];

  return (
    <div className="signup-pwd-segments" aria-label="Password strength">
      {segments.map((seg) => (
        <div
          key={seg.key}
          className={`signup-pwd-seg ${seg.key} ${seg.active ? "active" : "inactive"}`}
        >
          <span className="signup-pwd-seg-label">{seg.label}</span>
          <div className="signup-pwd-seg-line">
            <div className="signup-pwd-seg-line-fill" />
          </div>
        </div>
      ))}
    </div>
  );
};

const PasswordInstructions = ({ value, visible }) => {
  if (!visible) return null;
  const allOk = PASSWORD_CHECKS.every((c) => c.test(value));
  return (
    <div
      id="password-rules"
      className={`signup-pwd-instructions ${allOk ? "pwd-ok" : ""}`}
      aria-label="Password requirements"
    >
      {PASSWORD_CHECKS.map((c) => {
        const ok = c.test(value);
        return (
          <span
            key={c.key}
            className={`signup-pwd-instruction ${ok ? "pwd-req-ok" : ""}`}
          >
            <span className="signup-pwd-instruction-dot">
              {ok ? (
                <Check size={9} strokeWidth={3.2} />
              ) : (
                <X size={8} strokeWidth={2.6} />
              )}
            </span>
            {c.label}
          </span>
        );
      })}
    </div>
  );
};

/* =========================================================
   TERMINAL-STYLE SUCCESS ANIMATION
   Compiling → Building → Running → Registration Successful
   ========================================================= */

const TERMINAL_STAGES = [
  { stage: "Compiling", msg: `Analyzing registration form data…`, delay: 0 },
  { stage: "Building", msg: `Creating new user profile & validating fields…`, delay: 1100 },
  { stage: "Running", msg: `Connecting to Club Apex member database…`, delay: 2400 },
  { stage: "Success", msg: `<strong>Registration complete.</strong> Welcome to Club Apex! 🎉`, delay: 3700 },
];

const TerminalAnimation = ({ onFinish }) => {
  const reduced = usePrefersReducedMotion();
  const [lines, setLines] = useState([]); // {idx, stage, status, msg, delay}
  const [progress, setProgress] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(false);
  const timersRef = useRef([]);
  const wrapRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (reduced) {
      setLines(
        TERMINAL_STAGES.map((s, i) => ({
          idx: i,
          stage: s.stage,
          status: s.stage === "Success" ? "ok" : "ok",
          msg: s.msg,
          done: true,
        }))
      );
      setProgress(100);
      setBannerVisible(true);
      const t = setTimeout(() => onFinish && onFinish(), 400);
      timersRef.current.push(t);
      const timers = timersRef.current;
      return () => {
        timers.forEach(clearTimeout);
      };
    }

    TERMINAL_STAGES.forEach((s, i) => {
      // 1) Insert line with loading spinner
      const t1 = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          {
            idx: i,
            stage: s.stage,
            status: "loading",
            msg: s.msg,
            done: false,
          },
        ]);
        if (s.stage === "Compiling") setProgress(8);
        if (s.stage === "Building") setProgress(38);
        if (s.stage === "Running") setProgress(72);
        if (s.stage === "Success") setProgress(100);
      }, s.delay);

      // 2) Mark as OK after processing gap
      const gap = s.stage === "Success" ? 350 : 700;
      const t2 = setTimeout(() => {
        setLines((prev) =>
          prev.map((ln) =>
            ln.idx === i
              ? { ...ln, status: "ok", done: true }
              : ln
          )
        );
        if (s.stage === "Building") setProgress(48);
        if (s.stage === "Running") setProgress(88);
      }, s.delay + gap);

      timersRef.current.push(t1, t2);
    });

    // Show banner after success mark
    const tBanner = setTimeout(() => setBannerVisible(true), 4450);
    timersRef.current.push(tBanner);

    // Signal finish
    const tFin = setTimeout(() => onFinish && onFinish(), 4900);
    timersRef.current.push(tFin);

    const timers = timersRef.current;
    return () => {
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const target = endRef.current || wrapRef.current;
    if (!target) return;
    target.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [lines, bannerVisible, reduced]);

  return (
    <div className="signup-terminal-wrap" ref={wrapRef}>
      <div className="signup-terminal">
        <div className="signup-terminal-header">
          <span className="signup-terminal-dot d1" />
          <span className="signup-terminal-dot d2" />
          <span className="signup-terminal-dot d3" />
          <span className="signup-terminal-title">
            club-apex — register.sh
          </span>
        </div>
        <div className="signup-terminal-body">
          {lines.map((ln, i) => (
            <div
              className="signup-terminal-line"
              key={ln.idx}
              style={{
                animationDelay: `${i * 60}ms`,
                gap: ln.status === "ok" && ln.stage === "Success" ? 8 : 10,
              }}
            >
              <span
                className={`signup-terminal-stage`}
                style={{ color: ln.status === "ok" && ln.stage === "Success" ? "#8ef0ab" : undefined }}
              >
                {ln.stage.toUpperCase()}
              </span>
              <span
                className="signup-terminal-msg"
                dangerouslySetInnerHTML={{ __html: ln.msg }}
              />
              <span
                className={`signup-terminal-status ${ln.status}`}
                style={{ marginLeft: "auto" }}
                aria-hidden="true"
              />
            </div>
          ))}

          {/* Progress bar */}
          {lines.length > 0 && (
            <div style={{ marginTop: 8 }}>
              <div className="signup-terminal-progress">
                <div
                  className="signup-terminal-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Prompt footer */}
          {lines.length >= 2 && (
            <div className="signup-terminal-footer">
              <span className="signup-terminal-prompt">❯</span>
              <span className="signup-terminal-path">
                ~/svkm/club-apex/register
              </span>
              <span className="signup-terminal-cursor" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>

      {bannerVisible && (
        <div className="signup-success-banner">
          <div className="signup-success-banner-icon">
            <Rocket size={20} strokeWidth={2.2} />
          </div>
          <div className="signup-success-banner-text">
            <span className="signup-success-banner-title">
              You're officially a Club Apex member!
            </span>
            <span className="signup-success-banner-sub">
              Your profile has been queued for onboarding. Check your email for next steps.
            </span>
          </div>
        </div>
      )}
      <div ref={endRef} className="signup-terminal-scroll-end" aria-hidden="true" />
    </div>
  );
};

/* =========================================================
   SUCCESS STATE
   ========================================================= */

const SuccessState = ({ form }) => {
  const reduced = usePrefersReducedMotion();
  const [terminalDone, setTerminalDone] = useState(reduced);

  return (
    <div
      className={`signup-success animate-scale-in${
        terminalDone ? "" : " signup-success-running"
      }`}
    >
      {terminalDone && (
        <>
          <div className="signup-success-check-wrap" aria-hidden="true">
            <div className="signup-success-glow" />
            <div className="signup-success-check">
              <Check size={42} strokeWidth={3.2} />
            </div>
            <div className="signup-success-sparkles" aria-hidden="true">
              <Sparkles className="sparkle sparkle-1" size={14} />
              <Sparkles className="sparkle sparkle-2" size={10} />
              <Sparkles className="sparkle sparkle-3" size={12} />
            </div>
          </div>

          <div>
            <h2 className="signup-success-title">You're all set!</h2>
            <p className="signup-success-subtitle">Welcome to Club Apex.</p>
          </div>
        </>
      )}

      {/* Terminal animation runs first and stays on-screen until it finishes */}
      <TerminalAnimation onFinish={() => setTerminalDone(true)} />

      {terminalDone && (
        <>
          <div
            className="signup-success-card"
            style={{
              opacity: 0,
              animation: "signup-success-banner-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards",
            }}
          >
            <p className="signup-success-message">
              Your registration details have been successfully submitted. We're
              thrilled to have you join the SVKM NMIMS coding & development
              community.
            </p>

            <ul className="signup-success-summary" aria-label="Registration summary">
              <li>
                <User size={16} />
                <span>
                  <strong>Name:</strong> {form.name}
                </span>
              </li>
              <li>
                <Mail size={16} />
                <span>
                  <strong>Email:</strong> {form.email}
                </span>
              </li>
              <li>
                <Layers size={16} />
                <span>
                  <strong>Branch:</strong> {form.branch}
                </span>
              </li>
              <li>
                <Calendar size={16} />
                <span>
                  <strong>Year:</strong> {form.year}
                </span>
              </li>
            </ul>
          </div>

          <div
            className="signup-success-actions"
            style={{
              opacity: 0,
              animation: "signup-success-banner-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.25s forwards",
            }}
          >
            <Link
              to="/"
              className="apex-button apex-button-primary apex-button-large"
            >
              Explore Club Apex
            </Link>
            <Link
              to="/login"
              className="apex-button apex-button-outline apex-button-large"
            >
              Go to Login
            </Link>
          </div>

          <p
            className="signup-success-note"
            style={{
              opacity: 0,
              animation: "signup-success-banner-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards",
            }}
          >
            <ShieldCheck size={14} /> This is a frontend demo submission. No
            backend account was created.
          </p>
        </>
      )}
    </div>
  );
};

/* =========================================================
   MAIN SIGNUP PAGE
   ========================================================= */

const Signup = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [transition, setTransition] = useState(null);
  const reduced = usePrefersReducedMotion();
  const cardRef = useRef(null);

  const headingDone = useRef(false);
  const [showSupporting, setShowSupporting] = useState(false);

  const scrollToFormCard = () => {
    if (!window.matchMedia("(max-width: 900px)").matches) return;
    cardRef.current?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (step !== 2) return;
    const t = setTimeout(scrollToFormCard, 60);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, reduced]);

  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      cardRef.current?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    }, 80);
    return () => clearTimeout(t);
  }, [submitted, reduced]);

  useEffect(() => {
    if (reduced) {
      setShowSupporting(true);
      return;
    }
    const timeout = setTimeout(() => {
      headingDone.current = true;
      setShowSupporting(true);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [reduced]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      setErrors((prevErr) => ({
        ...prevErr,
        [name]: touched[name]
          ? validateField(name, value, next)
          : prevErr[name],
      }));
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, form),
    }));
  };

  const validateStep = (fields) => {
    const nextErrors = { ...errors };
    const nextTouched = { ...touched };
    let valid = true;
    for (const f of fields) {
      const msg = validateField(f, form[f], form);
      nextErrors[f] = msg;
      nextTouched[f] = true;
      if (msg) valid = false;
    }
    setErrors(nextErrors);
    setTouched(nextTouched);
    return valid;
  };

  const step1Valid = useMemo(() => {
    for (const f of FIELDS_STEP_1) {
      if (validateField(f, form[f], form) !== "") return false;
    }
    return true;
  }, [form]);

  const goToStep2 = () => {
    if (!validateStep(FIELDS_STEP_1)) return;
    if (reduced) {
      setStep(2);
      return;
    }
    setTransition("out");
    setTimeout(() => {
      setStep(2);
      setTransition("in");
      setTimeout(() => setTransition(null), 320);
    }, 220);
  };

  const goToStep1 = () => {
    if (reduced) {
      setStep(1);
      return;
    }
    setTransition("out");
    setTimeout(() => {
      setStep(1);
      setTransition("in");
      setTimeout(() => setTransition(null), 320);
    }, 220);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep([...FIELDS_STEP_1, ...FIELDS_STEP_2])) {
      if (errors[FIELDS_STEP_1[0]]) setStep(1);
      return;
    }
    setSubmitted(true);
  };

  const features = useMemo(
    () => [
      { icon: Code2, label: "Coding", desc: "Build real projects" },
      { icon: GitBranch, label: "Open Source", desc: "Contribute & learn Git" },
      { icon: Lightbulb, label: "Innovation", desc: "Hackathons & ideation" },
      { icon: Users, label: "Community", desc: "Collaborate & grow" },
    ],
    []
  );

  return (
    <section className={`signup-page${submitted ? " signup-page-success" : ""}`}>
      <div className="signup-container">
        {/* LEFT PANEL — FULL BLEED PINK */}
        <aside className="signup-left-panel animate-slide-right">
          <div
            className="signup-left-bubble signup-left-bubble-tr"
            aria-hidden="true"
          />
          <div
            className="signup-left-bubble signup-left-bubble-br"
            aria-hidden="true"
          />

          <div className="signup-left-inner">
            <div className="signup-left-top">
            <Link to="/" className="signup-left-brand">
              <div className="signup-left-brand-mark">
                <img src={clubApexLogo} alt="Club Apex Logo" />
              </div>
              <div className="signup-left-brand-text">
                <span className="signup-left-brand-name">Club Apex</span>
                <span className="signup-left-brand-sub">
                  SVKM NMIMS • Coding & Development
                </span>
              </div>
            </Link>

            <div className="signup-left-content">
              <Typewriter text="Club Apex" speed={85} />

              <div
                className={`signup-left-supporting ${
                  showSupporting ? "signup-left-supporting-visible" : ""
                }`}
              >
                <p className="signup-left-tagline">
                  Learn. Build. Contribute. Innovate.
                </p>

                <p className="signup-left-desc">
                  Join the student-driven technical community at SVKM NMIMS.
                  Dive into modern web development, open source collaboration,
                  workshops, and hackathons — alongside developers who share
                  your passion for building.
                </p>

                <ul className="signup-left-features">
                  {features.map(({ icon: Icon, label, desc }, i) => (
                    <li
                      key={label}
                      className={`signup-left-feature ${
                        showSupporting ? "animate-fade-up" : ""
                      }`}
                      style={
                        showSupporting
                          ? { animationDelay: `${(i + 1) * 90}ms` }
                          : {}
                      }
                    >
                      <div className="signup-left-feature-icon">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <strong>{label}</strong>
                        <span>{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>

            <div className="signup-left-footer">
              <span className="signup-left-footer-chip">
                <Cpu size={14} /> OpenForge 2026
              </span>
              <p>
                Already a member?{" "}
                <Link to="/login" className="signup-left-footer-link">
                  Sign in →
                </Link>
              </p>
            </div>
          </div>

          <div className="signup-panel-wave" aria-hidden="true">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,72 C180,120 360,24 540,56 C720,88 900,128 1080,72 C1200,36 1320,16 1440,48 L1440,120 L0,120 Z" />
            </svg>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <div className="signup-right-panel animate-slide-left">
          <div
            ref={cardRef}
            className={`signup-card glass-card animate-fade-up delay-1${
              step === 2 && !submitted ? " signup-card-step2" : ""
            }${submitted ? " signup-card-success" : ""}`}
          >
            {!submitted && (
              <header className="signup-card-header">
                <span className="signup-card-eyebrow">
                  <Sparkles size={14} /> Student Registration
                </span>
                <h2 className="signup-card-title">Create your account</h2>
                <p className="signup-card-subtitle">
                  Kick off your journey with Club Apex — it only takes a
                  minute.
                </p>

                <ProgressIndicator step={step} />
              </header>
            )}

            {submitted ? (
              <SuccessState form={form} />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  className={`signup-step-content ${
                    transition === "out"
                      ? "signup-step-out"
                      : transition === "in"
                        ? "signup-step-in"
                        : ""
                  }`}
                >
                  {step === 1 && (
                    <div className="signup-grid-fields">
                      <OutsideInput
                        id="name"
                        name="name"
                        label="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.name}
                        touched={touched.name}
                        icon={User}
                        autoComplete="name"
                        placeholder="Rafael Nadal"
                      />
                      <OutsideInput
                        id="prn"
                        name="prn"
                        label="PRN Number"
                        value={form.prn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.prn}
                        touched={touched.prn}
                        icon={Hash}
                        autoComplete="off"
                        placeholder="2024012345678"
                      />
                      <OutsideInput
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                        touched={touched.email}
                        icon={Mail}
                        autoComplete="email"
                        placeholder="yourname@gmail.com"
                      />
                      <OutsideInput
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phone}
                        touched={touched.phone}
                        icon={Phone}
                        autoComplete="tel"
                        placeholder="98765 43210"
                      />
                      <OutsideSelect
                        id="year"
                        name="year"
                        label="Year of Study"
                        value={form.year}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.year}
                        touched={touched.year}
                        icon={Calendar}
                        options={YEARS}
                        placeholder="Select your year"
                      />
                      <OutsideSelect
                        id="branch"
                        name="branch"
                        label="Branch / Department"
                        value={form.branch}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.branch}
                        touched={touched.branch}
                        icon={Layers}
                        options={BRANCHES}
                        placeholder="Select your branch"
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="signup-step2-center">
                      <div className="signup-step2-fields">
                        <div style={{ width: "100%" }}>
                          <OutsideInput
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            label="Create Password"
                            value={form.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password}
                            touched={touched.password}
                            icon={Lock}
                            autoComplete="new-password"
                            hideError
                            rightSlot={
                              <button
                                type="button"
                                className="signup-field-toggle"
                                onClick={() => setShowPassword((s) => !s)}
                                aria-label={
                                  showPassword
                                    ? "Hide password"
                                    : "Show password"
                                }
                                tabIndex={-1}
                              >
                                <PasswordEyes open={showPassword} />
                              </button>
                            }
                          />
                          <PasswordStrengthLoaders value={form.password} />
                          <PasswordInstructions
                            value={form.password}
                            visible={!!form.password || touched.password}
                          />
                        </div>

                        <div style={{ width: "100%" }}>
                          <OutsideInput
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirm ? "text" : "password"}
                            label="Confirm Password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                            icon={Lock}
                            autoComplete="new-password"
                            rightSlot={
                              <button
                                type="button"
                                className="signup-field-toggle"
                                onClick={() => setShowConfirm((s) => !s)}
                                aria-label={
                                  showConfirm
                                    ? "Hide password"
                                    : "Show password"
                                }
                                tabIndex={-1}
                              >
                                <PasswordEyes open={showConfirm} />
                              </button>
                            }
                          />
                          {touched.confirmPassword && form.confirmPassword && (
                            <div
                              style={{
                                marginTop: 10,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 14px",
                                borderRadius: 999,
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                background:
                                  form.confirmPassword === form.password
                                    ? "linear-gradient(135deg, rgba(40, 200, 64, 0.16), rgba(133, 57, 83, 0.04))"
                                    : "linear-gradient(135deg, rgba(192, 57, 43, 0.12), rgba(255, 255, 255, 0.5))",
                                color:
                                  form.confirmPassword === form.password
                                    ? "#145a32"
                                    : "#922b21",
                                border: `1px solid ${
                                  form.confirmPassword === form.password
                                    ? "rgba(40, 200, 64, 0.3)"
                                    : "rgba(192, 57, 43, 0.22)"
                                }`,
                                transition: "all 0.25s ease",
                                boxShadow:
                                  form.confirmPassword === form.password
                                    ? "0 4px 14px rgba(40, 200, 64, 0.12)"
                                    : "none",
                              }}
                            >
                              {form.confirmPassword === form.password ? (
                                <>
                                  <Check size={13} strokeWidth={3} />
                                  <span>Passwords match — good to go! ✓</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle size={13} strokeWidth={2.5} />
                                  <span>
                                    Does not match above password — try again
                                  </span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="signup-form-actions">
                  {step === 2 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="large"
                      onClick={goToStep1}
                    >
                      <ArrowLeft size={18} /> Back
                    </Button>
                  )}

                  {step === 1 ? (
                    <Button
                      type="button"
                      variant="primary"
                      size="large"
                      onClick={goToStep2}
                      className="signup-action-full-mobile"
                      disabled={!step1Valid}
                      title={
                        !step1Valid
                          ? "Please fill all 6 fields correctly before continuing."
                          : ""
                      }
                    >
                      Continue <ArrowRight size={18} />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      className="signup-action-full-mobile"
                    >
                      <FileCode size={18} /> Create Account
                    </Button>
                  )}
                </div>

                <p className="signup-form-footnote">
                  By registering, you agree to participate in Club Apex
                  activities and abide by the SVKM NMIMS code of conduct.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
