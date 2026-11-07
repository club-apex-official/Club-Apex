import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar__header">
        <h2>Apex</h2>
        <span>Student Workspace</span>
      </div>

      <nav className="dashboard-sidebar__nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/events">My Events</NavLink>
        <NavLink to="/dashboard/certificates">Certificates</NavLink>
        <NavLink to="/dashboard/badges">Badges</NavLink>
        <NavLink to="/dashboard/workspace">Workspace</NavLink>
        <NavLink to="/dashboard/profile">Profile</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;