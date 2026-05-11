import { useState } from "react";
import Button from "../ui/Button";
import NavMenu from "./NavMenu";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="relative container mx-auto flex items-center justify-between py-3 px-3 font-medium text-xl">

      <img src="src/assets/image/logo.png" alt="Logo" className="h-16 md:h-20" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <NavMenu />
      </ul>

      <div className="hidden md:block">
        <Button text="Donate" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)} 
      >
      {open ? <X size={28} /> : <Menu size={28} />}

      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 md:hidden z-50">

          <ul className="flex flex-col gap-6 text-center">
            <NavMenu onClick={() => setOpen(false)} />
          </ul>

          <Button text="Donate" />
        </div>
      )}
    </nav>
  );
};

export default Header;