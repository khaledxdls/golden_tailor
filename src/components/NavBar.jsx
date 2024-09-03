import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BussinesInfo from "./BussinesInfo";
import Logo from "./Logo";
import MainNav from "./MainNav";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Close dropdown when route changes
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }, [location]);
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <nav className="z-10 bg-primary-50 fixed flex items-center justify-between px-[2.4rem] py-[1.2rem] w-[90%] left-1/2 transform -translate-x-1/2 mt-5 ">
      <Logo />
      <MainNav />
      <BussinesInfo />
    </nav>
  );
}

export default NavBar;
