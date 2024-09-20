import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from "styled-components";
//import "./styles/Sidebar.css";

const MainContainer = styled.div`
  display: flex;
`;
const SidebarContent = styled.div`
  width: ${(props) => props.open ? "240px" : "60px"};
  height: calc(100vh - 60px);
  background-color: #1868b8;
  padding:10px;
  transition: width 0.6s ease-in-out;
  position: sticky;
`;

const SidebarItem = styled(NavLink)`
  display:flex;
  align-items: center;
  justify-content: start;
  gap:20px;
  padding: 5px;
  text-decoration:none;
  font-size:24px;
  color:#000;

&:hover{
  background-color: #1e5f9e;
  border-radius: 5px;
}
`;
const ItemName = styled.div`
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  width: 100%;
  white-space: nowrap;
`;

const ViewSidebar = styled.div`
  color:#fff;
  display:flex;
  justify-content: ${({ open }) => open ? 'end' : 'center'};
  margin-bottom: 10px;

`;

const ViewIcon = styled.div`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
&:hover{
  background-color: #1e5f9e;
}

`

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/hotels",
      name: "Hotels",
      icon: <HotelIcon style={{ fontSize: '35px' }} />,
    },
    {
      path: "/usuarios",
      name: "Usuarios",
      icon: < RoomPreferencesIcon style={{ fontSize: '35px' }} />,
    },
    {
      path: "/customers",
      name: "Clientes",
      icon: <SupportAgentIcon style={{ fontSize: '35px' }} />,
    },
  ];

  return (
    <MainContainer>
      <SidebarContent open={isOpen}>
        <ViewSidebar open={isOpen}>
          {isOpen ?
            <ViewIcon>
              <ArrowBackIcon onClick={toggle} style={{ fontSize: '35px' }} />
            </ViewIcon>
            :
            <ViewIcon>
              <ArrowForwardIcon onClick={toggle} style={{ fontSize: '35px' }} />
            </ViewIcon>
          }
        </ViewSidebar>

        {menuItem.map((item, index) => (
          <SidebarItem to={`/protected${item.path}`} key={index}>
            {item.icon}
            <ItemName open={isOpen}>
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
