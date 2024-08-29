import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 2.4rem;
    color: #463f3f;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s;
    z-index: 10;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #ffffff;
    background-color: #463f3f;
    border-radius: #4b4f4c;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #463f3f;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #463f3f;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <span> Home </span>{" "}
          </StyledNavLink>{" "}
        </li>{" "}
        <li>
          <StyledNavLink to="/services">
            <span> Services </span>{" "}
          </StyledNavLink>{" "}
        </li>{" "}
        <li>
          <StyledNavLink to="/about">
            <span> About </span>{" "}
          </StyledNavLink>{" "}
        </li>{" "}
      </NavList>{" "}
    </nav>
  );
}

export default MainNav;
