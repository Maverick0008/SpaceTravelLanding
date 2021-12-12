import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideButtonWrap,
  SidebarRoute,
} from "./SideBarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} >
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            <SidebarLink to="Signup" onClick={toggle}>Sign Up</SidebarLink>
          </SidebarMenu>
          <SideButtonWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideButtonWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
