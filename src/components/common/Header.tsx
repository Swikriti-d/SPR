import { useState } from "react";
import Button from "../ui/Button";
import NavMenu from "./NavMenu";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className=" container relative mx-auto flex items-center justify-between px-6 sm:px-10 md:px-20 lg:px-30 py-2 font-medium text-xl">

      <img src="src/assets/image/logo.png" alt="Logo" className="h-16 md:h-20" />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10">
        <NavMenu />
      </ul>

      <div className="hidden lg:block">
        <Button text="Donate" />
      </div>

      {/* Mobile Menu Button */}
      <button type="button" className="lg:hidden text-3xl" onClick={() => setOpen(!open)} 
      >
      {open ? <X size={28} /> : <Menu size={28} />}

      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 lg:hidden z-50">

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