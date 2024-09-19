import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HotelIcon from "@mui/icons-material/Hotel";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? "260px" : "40px")};
  background-color: blue;
`;

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/hotels",
      name: "Hotels",
      icon: <HotelIcon />,
    },
    {
      path: "/usuarios",
      name: "Usuarios",
      icon: <RoomPreferencesIcon />,
    },
    {
      path: "/customers",
      name: "Clientes",
      icon: <SupportAgentIcon />,
    },
  ];

  return (
    <MainContainer>
      <SidebarContainer>
        <div className="top_section">
          <div className="container-bars">
            <div>
              <HorizontalSplitIcon
                style={{ color: "#000000" }}
                onClick={toggle}
              />
            </div>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={`/protected${item.path}`}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </SidebarContainer>
      <main>{children}</main>
    </MainContainer>
  );
};

export default Sidebar;
