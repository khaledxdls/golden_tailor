import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import BussinesInfo from "./BussinesInfo";

function NavBar() {
  return (
    <nav className=" z-10 bg-primary-50 fixed flex items-center justify-between px-[2.4rem] py-[1.2rem] w-[90%] left-1/2 transform -translate-x-1/2 mt-5 ">
      <Logo />
      <MainNav />
      <BussinesInfo />
    </nav>
  );
}

export default NavBar;
