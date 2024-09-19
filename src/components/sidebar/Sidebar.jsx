import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import styled from "styled-components";
//import "./styles/Sidebar.css";

const MainContainer = styled.div`
  display: flex;
`;
const SidebarContent = styled.div`
  width: ${({ isOpen }) => isOpen ? "240px" : "50px"};
  height: 92vh;
  background-color: #1868b8;
  padding:10px;
`;

const SidebarItem = styled(NavLink)`
  display:flex;
  gap:10px;
  text-decoration:none;
  font-size:20px;
  color:#fff;
`;
const ItemName = styled.div`
  display:${({ isOpen }) => isOpen ? "block" : "none"};
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
      icon: < RoomPreferencesIcon />,
    },
    {
      path: "/customers",
      name: "Clientes",
      icon: <SupportAgentIcon />,
    },
  ];

  return (
    <MainContainer>
      <SidebarContent isOpen={isOpen}>
        <div className="top_section">
          <HorizontalSplitIcon style={{ color: "#000000", }} onClick={toggle} />
        </div>
        {menuItem.map((item, index) => (
          <SidebarItem >
            <div style={{ fontSize: "40px" }}>
              {item.icon}
            </div>
            <ItemName isOpen={isOpen}>
              {item.name}
            </ItemName>
          </SidebarItem>
        ))
        }
      </SidebarContent >

      <main>
        {children}
      </main>
    </MainContainer >
  );
};

export default Sidebar;
