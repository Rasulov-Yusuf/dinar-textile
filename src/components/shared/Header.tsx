import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header>
      <div className="hidden lg:flex">
        <Navbar />
      </div>

      <div className="flex lg:hidden">
        <Sidebar />
      </div>
    </header>
  );
}
