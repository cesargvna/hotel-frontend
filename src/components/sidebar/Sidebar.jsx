import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HotelIcon from "@mui/icons-material/Hotel";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SidebarContent = styled.div`
  position: sticky;
  width: ${({ open }) => (open ? "250px" : "60px")};
  height: calc(100vh - 60px);
  background-color: #1868b8;
  padding: 10px;
  transition: width 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    height: 60px;
    width: 100%;
  }
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 5px;
  text-decoration: none;
  font-size: 24px;
  color: #fff;

  &:hover {
    background-color: #009fa8;
    border-radius: 5px;
  }
`;
const ItemName = styled.div`
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  width: 100%;
  white-space: nowrap;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ViewSidebar = styled.div`
  color: #fff;
  display: flex;
  justify-content: ${({ open }) => (open ? "end" : "center")};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ViewIcon = styled.div`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #009fa8;
  }
`;

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/hotels",
      name: "Hotels",
      icon: <HotelIcon style={{ fontSize: "35px" }} />,
    },
    {
      path: "/users",
      name: "Usuarios",
      icon: <RoomPreferencesIcon style={{ fontSize: "35px" }} />,
    },
    {
      path: "/reserves",
      name: "Reserves",
      icon: <SupportAgentIcon style={{ fontSize: "35px" }} />,
    },
  ];

  return (
    <MainContainer>
      <SidebarContent open={isOpen}>
        <ViewSidebar open={isOpen}>
          {isOpen ? (
            <ViewIcon>
              <ArrowBackIcon onClick={toggle} style={{ fontSize: "35px" }} />
            </ViewIcon>
          ) : (
            <ViewIcon>
              <ArrowForwardIcon onClick={toggle} style={{ fontSize: "35px" }} />
            </ViewIcon>
          )}
        </ViewSidebar>

        {menuItem.map((item, index) => (
          <SidebarItem to={`/protected${item.path}`} key={index}>
            {item.icon}
            <ItemName open={isOpen}>{item.name}</ItemName>
          </SidebarItem>
        ))}
      </SidebarContent>

      <main style={{ width: "100%" }}>{children}</main>
    </MainContainer>
  );
};

export default Sidebar;
