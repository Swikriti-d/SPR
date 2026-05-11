import React from "react";

type NavMenuProps = {
  onClick?: () => void;
};

const NavMenu: React.FC<NavMenuProps> = ({ onClick }) => {
  const navItem =
    "cursor-pointer text-[var(--primary)] border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-[var(--secondary)] hover:text-gray-700";

  return (
    <>
      <li className={navItem} onClick={onClick}>Home</li>
      <li className={navItem} onClick={onClick}>About</li>
      <li className={navItem} onClick={onClick}>Programs</li>
      <li className={navItem} onClick={onClick}>Impact</li>
      <li className={navItem} onClick={onClick}>News</li>
      <li className={navItem} onClick={onClick}>Contact</li>
    </>
  );
};

export default NavMenu;