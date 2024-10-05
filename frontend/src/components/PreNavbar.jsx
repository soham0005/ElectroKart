import React, { useState } from 'react';
import styled from 'styled-components';
import {  CiShoppingCart, CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import CollapsibleSearchBar from './CollapsibleSearchBar';
import '@fontsource/montserrat';
import logo from '../assets/logo.webp';

const PreNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  return (
    <>
      <Nav>
        <NavLeft>
          <Logo src={logo} alt="Logo" />
          <NavItem href="#">Store</NavItem>
          <NavItem href="#">Phones</NavItem>
          <NavItem href="#">Tablets</NavItem>
          <NavItem href="#">TV & Smart Home</NavItem>
          <NavItem href="#">Smart Watch & Audio</NavItem>
        </NavLeft>
        <NavRight>
          <NavItem href="#">Discover</NavItem>
          <NavItem href="#">Support</NavItem>
          <CollapsibleSearchBar></CollapsibleSearchBar>
          <NavIcon><CiShoppingCart /></NavIcon>
          <NavIcon><CiUser /></NavIcon>
          <MobileMenuIcon onClick={toggleSidebar}>
            <FiMenu />
          </MobileMenuIcon>
        </NavRight>
      </Nav>

      {isSidebarOpen && <Overlay onClick={toggleSidebar} />}

      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <CloseIcon onClick={toggleSidebar}>
            <AiOutlineClose />
          </CloseIcon>
        </SidebarHeader>
        <SidebarContent>
          <CenteredLogo src={logo} alt="Logo" />
          <SidebarItem href="#">Store</SidebarItem>
          <SidebarItem href="#">Phones</SidebarItem>
          <SidebarItem href="#">Tablets</SidebarItem>
          <SidebarItem href="#">TV & Smart Home</SidebarItem>
          <SidebarItem href="#">Smart Watch & Audio</SidebarItem>
          <SidebarSpacing />
          <SidebarItem href="#">Discover</SidebarItem>
          <SidebarItem href="#">Support</SidebarItem>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default PreNavbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  overflow:hidden;
  font-family: 'Montserrat', sans-serif;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    gap: 10px;
    & > a:not(:first-child) {
      display: none;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    & > a {
      display: none;
    }
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: black;
    text-decoration: none;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: black;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavIcon = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: black;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0; /* Position it to the right */
  width: 50%;
  height: 100%;
  background-color: #f1f1f1;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5); /* Change the shadow direction */
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')}; /* Translate out to the right */
  z-index: 200;
  font-family: 'Montserrat', sans-serif;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #f1f1f1;
  color: black;
`;

const CloseIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 10px 0;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: black;
    text-decoration: none;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: black;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SidebarSpacing = styled.div`
  margin-top: 30px;
`;

const CenteredLogo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 auto 50px auto;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;

  @media (max-width: 1024px) {
    width: 80px;
  }
`;