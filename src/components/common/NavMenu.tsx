import React from "react";
import { Link } from "react-router-dom";

type NavMenuProps = {
  onClick?: () => void;
};

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Programs", link: "/Programs" },
  { name: "Impact", link: "/Impact" },
  { name: "News", link: "/News" },
  { name: "Contact", link: "/Contact" },
];

const NavMenu: React.FC<NavMenuProps> = ({ onClick }) => {
  const navItem =
    "cursor-pointer text-[var(--primary)] border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[var(--secondary)] hover:text-gray-700";

  return (
    <>
      {menuItems.map((item) => (
        <li key={item.name}>
          <a href={item.link} className={navItem} onClick={onClick}>
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavMenu;