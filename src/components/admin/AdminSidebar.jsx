import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__header">
        <h2>Apex Admin</h2>
        <span>Management Panel</span>
      </div>

      <nav className="admin-sidebar__nav">
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/events">Events</NavLink>
        <NavLink to="/admin/students">Students</NavLink>
        <NavLink to="/admin/attendance">Attendance</NavLink>
        <NavLink to="/admin/certificates">Certificates</NavLink>
        <NavLink to="/admin/recruitment">Recruitment</NavLink>
        <NavLink to="/admin/team">Team</NavLink>
        <NavLink to="/admin/timeline">Timeline</NavLink>
        <NavLink to="/admin/announcements">Announcements</NavLink>
        <NavLink to="/admin/access">Admin Access</NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;