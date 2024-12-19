"use client";
import { headerData } from "@/config/constants";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <header className="header">
      <div className="header-container">
        <Logo
          title={headerData.logoData.title.en}
          subtitle={headerData.logoData.subtitle}
        />
        <Navbar toggleSidebar={toggleSidebar} pathName={pathName} />
      </div>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathName={pathName}
        />
      </div>
    </header>
  );
}

export default Header;
