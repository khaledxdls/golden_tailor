import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="z-30 bg-primary-50 fixed w-[90%] left-1/2 transform -translate-x-1/2 mt-5 px-[2.4rem] py-[1.2rem] flex items-center justify-between">
      <div className="flex items-center">
        {isMobile && (
          <button onClick={toggleDropdown} className="focus:outline-none mr-4">
            {isDropdownOpen ? (
              <XMarkIcon className="h-8 w-8 text-gray-600" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-gray-600" />
            )}
          </button>
        )}
        {isMobile ? null : <Logo />}
      </div>
      {isMobile && isDropdownOpen && (
        <div className="absolute bg-white shadow-md mt-2 w-full top-full left-0">
          <MainNav isDropdownOpen={isDropdownOpen} />
        </div>
      )}
      {!isMobile && <MainNav isDropdownOpen={false} />} <BussinesInfo />
    </nav>
  );
}

export default NavBar;
