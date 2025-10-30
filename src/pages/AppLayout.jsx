/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNav from "../components/AppNav";
import Collection from "../components/Collection";
import Instructions from "../components/Instructions";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <AppNav />
      <div className="container mx-auto px-4">
        <Outlet />
        <Collection />
      </div>
    </div>
  );
}

export default AppLayout;
