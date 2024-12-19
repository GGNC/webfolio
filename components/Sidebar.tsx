import { useOutsideClick } from "@/hooks/useOutsideClick";
import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/config/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pathName: string;
}
function Sidebar({ isOpen, onClose, pathName }: SidebarProps) {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  const sideBarElements = headerData.linkData.map((item) => {
    return (
      <Link
        href={item.href}
        key={item.href}
        className={`sidebar-item ${
          pathName === item.href ? "sidebar-item_active" : ""
        }`}
        onClick={onClose}
      >
        {item.title.en}
      </Link>
    );
  });
  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="sidebar-button-container">
        <button onClick={onClose} className="sidebar_close-button">
          <X />
        </button>
      </div>
      <nav className="sidebar-container">
        <Logo
          title={headerData.logoData.title.en}
          subtitle={headerData.logoData.subtitle}
        />
        {sideBarElements}
        <Link
          href={headerData.hireMeData.href}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-hireme"
        >
          {headerData.hireMeData.title.en}
        </Link>
        <SocialLinks />
      </nav>
    </div>
  );
}

export default Sidebar;
