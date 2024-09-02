import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;

  /* Hide the nav list when the dropdown is open */
  @media (max-width: 1200px) {
    display: ${({ isDropdownOpen }) => (isDropdownOpen ? 'block' : 'none')}; /* Change display based on dropdown state */
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 2.4rem;
  color: #463f3f;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s;
  z-index: 10;

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

function MainNav({ isDropdownOpen }) {
  return (
    <nav>
      <NavList isDropdownOpen={isDropdownOpen}>
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
