import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className="contents">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
