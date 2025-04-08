import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth-container h-screen w-full">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
