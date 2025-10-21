import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="bg-pink-50">
      <nav className="p-4 max-w-7xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="p-4 max-w-7xl mx-auto min-h-[calc(100vh-65px)]">
        <Outlet></Outlet>
      </main>
      <footer className="p-4 max-w-7xl mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
