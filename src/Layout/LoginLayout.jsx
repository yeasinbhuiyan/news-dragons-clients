import React from "react";
import NavigationVar from "../Shared/Footer/NavigationVar/NavigationVar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavigationVar></NavigationVar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
