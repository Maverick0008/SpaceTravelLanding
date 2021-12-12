import React, {useState,useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";

export const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY >=80) {
        setScrollNav(true)
    }else {
        setScrollNav(false)
    }
}
useEffect(() => {
    window.addEventListener('scroll', changeNav)
},[])

const toggleHome = () => {
    scroll.scrollToTop()
}
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>SpaceTravel</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
