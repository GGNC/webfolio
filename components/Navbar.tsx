import Link from "next/link";
import { Menu } from "lucide-react";
import { headerData } from "@/config/constants";

interface NavbarProps {
  pathName: string;
  toggleSidebar: () => void;
}
function Navbar({ toggleSidebar, pathName }: NavbarProps) {
  const navbarElements = headerData.linkData.map((item) => {
    return (
      <Link
        href={item.href}
        key={item.href}
        className={`navbar-item group overflow-x-hidden ${
          pathName === item.href ? "navbar-item_active" : ""
        }`}
      >
        {item.title.en}
        <span
          className={`navbar-item-effect group-hover:translate-x-0 ${
            pathName === item.href ? "translate-x-0" : "-translate-x-[105%]"
          }`}
        />
      </Link>
    );
  });
  return (
    <>
      <div className="navbar-container">
        {navbarElements}
        <Link
          href={headerData.hireMeData.href}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-hireme"
        >
          {headerData.hireMeData.title.en}
        </Link>
      </div>
      <button className="navbar-hamburger-button" onClick={toggleSidebar}>
        <Menu />
      </button>
    </>
  );
}

export default Navbar;
