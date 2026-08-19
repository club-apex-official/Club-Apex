/**
 * Reusable AOS animation presets for pages and sections.
 */
export const loginHeroAnimations = {
  eyebrow: {
    animation: "fade-down",
    delay: 80,
    duration: 650,
  },
  title: {
    animation: "fade-center",
    delay: 200,
    duration: 850,
  },
  description: {
    animation: "fade-up",
    delay: 400,
    duration: 700,
  },
  bullet: (index) => ({
    animation: "fade-center",
    delay: 620 + index * 160,
    duration: 600,
  }),
  formCard: {
    animation: "zoom-in",
    delay: 300,
    duration: 700,
  },
};

export default loginHeroAnimations;
