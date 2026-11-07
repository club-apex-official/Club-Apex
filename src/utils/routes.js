export const ROUTES = {
  // =========================
  // PUBLIC ROUTES
  // =========================

  HOME: "/",

  EVENTS: "/events",
  EVENT_DETAILS: "/events/:eventId",

  TEAM: "/team",

  ACTIVITY: "/activity",
  ACTIVITY_DETAILS: "/activity/:activityId",

  RECRUITMENT: "/recruitment",

  ABOUT: "/about",

  CONTACT: "/contact",


  // =========================
  // AUTHENTICATION
  // =========================

  LOGIN: "/login",

  SIGNUP: "/signup",

  ADMIN_LOGIN: "/admin-login",


  // =========================
  // STUDENT
  // =========================

  DASHBOARD: "/dashboard",

  MY_EVENTS: "/dashboard/events",

  CERTIFICATES: "/dashboard/certificates",

  BADGES: "/dashboard/badges",

  WORKSPACE: "/dashboard/workspace",

  PROFILE: "/dashboard/profile",

  SETTINGS: "/dashboard/settings",


  // =========================
  // ADMIN
  // =========================

  ADMIN_DASHBOARD: "/admin",

  ADMIN_EVENTS: "/admin/events",

  ADMIN_STUDENTS: "/admin/students",

  ADMIN_ATTENDANCE: "/admin/attendance",

  ADMIN_CERTIFICATES: "/admin/certificates",

  ADMIN_RECRUITMENT: "/admin/recruitment",

  ADMIN_TEAM: "/admin/team",

  ADMIN_TIMELINE: "/admin/timeline",

  ADMIN_ANNOUNCEMENTS: "/admin/announcements",

  ADMIN_ACCESS: "/admin/access",
};

export default ROUTES;