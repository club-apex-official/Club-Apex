import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";

import { ROUTES } from "./utils/routes";

// =========================================================
// PUBLIC PAGES
// =========================================================

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Team from "./pages/Team";
import ActivityFeed from "./pages/ActivityFeed";
import Recruitment from "./pages/Recruitment";
import About from "./pages/About";
import Contact from "./pages/Contact";

// =========================================================
// AUTHENTICATION PAGES
// =========================================================

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";

// =========================================================
// STUDENT PAGES
// =========================================================

import Dashboard from "./pages/Dashboard";
import MyEvents from "./pages/MyEvents";
import Certificates from "./pages/Certificates";
import Badges from "./pages/Badges";
import Workspace from "./pages/Workspace";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// =========================================================
// ADMIN PAGES
// =========================================================

import AdminDashboard from "./pages/AdminDashboard";
import ManageEvents from "./pages/ManageEvents";
import ManageStudents from "./pages/ManageStudents";
import Attendance from "./pages/Attendance";
import ManageCertificates from "./pages/ManageCertificates";
import RecruitmentManagement from "./pages/RecruitmentManagement";
import TeamManagement from "./pages/TeamManagement";
import TimelineManagement from "./pages/TimelineManagement";
import Announcements from "./pages/Announcements";
import AdminAccess from "./pages/AdminAccess";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =================================================
            PUBLIC WEBSITE
            ================================================= */}

        <Route element={<MainLayout />}>

          {/* Home */}
          <Route
            path={ROUTES.HOME}
            element={<Home />}
          />

          {/* Events */}
          <Route
            path={ROUTES.EVENTS}
            element={<Events />}
          />

          {/* Event Details
              Example:
              /events/openforge-2026
          */}
          <Route
            path="/events/:eventId"
            element={<EventDetails />}
          />

          {/* Team */}
          <Route
            path={ROUTES.TEAM}
            element={<Team />}
          />

          {/* Activity Feed */}
          <Route
            path={ROUTES.ACTIVITY}
            element={<ActivityFeed />}
          />

          {/* Recruitment */}
          <Route
            path={ROUTES.RECRUITMENT}
            element={<Recruitment />}
          />

          {/* About */}
          <Route
            path={ROUTES.ABOUT}
            element={<About />}
          />

          {/* Contact */}
          <Route
            path={ROUTES.CONTACT}
            element={<Contact />}
          />

          {/* =================================================
              AUTHENTICATION
              ================================================= */}

          <Route
            path={ROUTES.LOGIN}
            element={<Login />}
          />

          <Route
            path={ROUTES.SIGNUP}
            element={<Signup />}
          />

          <Route
            path={ROUTES.ADMIN_LOGIN}
            element={<AdminLogin />}
          />

        </Route>


        {/* =================================================
            STUDENT DASHBOARD
            ================================================= */}

        <Route element={<DashboardLayout />}>

          <Route
            path={ROUTES.DASHBOARD}
            element={<Dashboard />}
          />

          <Route
            path={ROUTES.MY_EVENTS}
            element={<MyEvents />}
          />

          <Route
            path={ROUTES.CERTIFICATES}
            element={<Certificates />}
          />

          <Route
            path={ROUTES.BADGES}
            element={<Badges />}
          />

          <Route
            path={ROUTES.WORKSPACE}
            element={<Workspace />}
          />

          <Route
            path={ROUTES.PROFILE}
            element={<Profile />}
          />

          <Route
            path={ROUTES.SETTINGS}
            element={<Settings />}
          />

        </Route>


        {/* =================================================
            ADMIN DASHBOARD
            ================================================= */}

        <Route element={<AdminLayout />}>

          <Route
            path={ROUTES.ADMIN_DASHBOARD}
            element={<AdminDashboard />}
          />

          <Route
            path={ROUTES.ADMIN_EVENTS}
            element={<ManageEvents />}
          />

          <Route
            path={ROUTES.ADMIN_STUDENTS}
            element={<ManageStudents />}
          />

          <Route
            path={ROUTES.ADMIN_ATTENDANCE}
            element={<Attendance />}
          />

          <Route
            path={ROUTES.ADMIN_CERTIFICATES}
            element={<ManageCertificates />}
          />

          <Route
            path={ROUTES.ADMIN_RECRUITMENT}
            element={<RecruitmentManagement />}
          />

          <Route
            path={ROUTES.ADMIN_TEAM}
            element={<TeamManagement />}
          />

          <Route
            path={ROUTES.ADMIN_TIMELINE}
            element={<TimelineManagement />}
          />

          <Route
            path={ROUTES.ADMIN_ANNOUNCEMENTS}
            element={<Announcements />}
          />

          <Route
            path={ROUTES.ADMIN_ACCESS}
            element={<AdminAccess />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;