import { useEffect, useState } from "react";
import {
  CloseIcon,
  HamburgerIcon,
  HomeIcon,
  NavContainer,
  NavItem,
  NavList,
  Sidebar,
  SidebarItem,
  SidebarLink,
  SidebarList,
} from "./NavBar.styled";
import NavLink from "./NavLink";

export const NavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLinkCls = (pathname: string) => {
    return activeTab === pathname ? "active-link" : "";
  };

  useEffect(() => {
    const isEdge = () => /Edg/.test(navigator.userAgent);
    const handlePageShow = (event: PageTransitionEvent) => {
      if (isEdge() && event.persisted) {
        window.location.reload();
      }
    };

    const updateActiveTab = () => {
      const currentPath = window.location.hash.replace("#", "") || "/";
      setActiveTab(currentPath);
    };

    window.addEventListener("hashchange", updateActiveTab);
    window.addEventListener("pageshow", handlePageShow);
    updateActiveTab();
    return () => {
      window.removeEventListener("hashchange", updateActiveTab);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

const links = [
  { to: "/schedule", label: "Schedule" },
  { to: "/jammers", label: "Game Jam" },
  { to: "/resources", label: "Resources" },
  { to: "/conduct", label: "Conduct" },
  { to: "/accessibility", label: "Accessibility" },
];

  return ( 
    <NavContainer>
      {activeTab !== "/" && (
        <HomeIcon href="/ADA-GameJam/" onClick={() => setActiveTab("/")}>
          &#8962;
        </HomeIcon>
      )}
      <NavList>
        {links.map((link) => (
          <NavItem key={link.to}>
            <NavLink
              to={link.to}
              onClick={() => {
                if (link.label !== "Game") {
                  setActiveTab(link.to);
                }
              }}
              className={getLinkCls(link.to)}
            >
              {link.label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
      <HamburgerIcon onClick={toggleSidebar}>&#9776;</HamburgerIcon>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarList>
          {links.map((link) => (
            <SidebarItem key={link.to}>
              <SidebarLink
                to={link.to}
                onClick={() => {
                  setActiveTab(link.to);
                  toggleSidebar();
                }}
                rel={link.label === "Game" ? "noopener noreferrer" : undefined}
                target={link.label === "Game" ? "_blank" : undefined}
              >
                {link.label}
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarList>
      </Sidebar>
    </NavContainer>
  );
};
