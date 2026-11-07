import React from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-layout__content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;