import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { buttonAndLinkStyles } from "../styles/sharedStyles";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: center; /* Center content */
  position: relative; /* Add relative positioning */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
    padding-bottom: 2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0.5rem;
  margin-bottom: 2rem;

  .active-link {
    background-color: ${({ theme }) => theme.colors.lilac};
  }
`;

export const HomeIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lilac};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export const AnimatedLink = styled(Link)`
  ${({ theme }) => buttonAndLinkStyles(theme)}
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lilac};
  }
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "220px" : "0")};
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.teal}CC;
  backdrop-filter: blur(10px);
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  z-index: 100;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 2rem;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lilac};
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarItem = styled.li`
  text-align: center;
  margin: 1rem 0;
`;

export const SidebarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-family: "GT Ultra", sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lilac};
  }

  .active-link {
    background-color: ${({ theme }) => theme.colors.lilac};
  }
`;
