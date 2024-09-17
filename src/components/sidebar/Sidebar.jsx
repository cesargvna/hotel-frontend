import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
//import "./styles/Sidebar.css";

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
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "260px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img style={{ height: "40px" }} src="dfs" alt='logo' />
          </h1>
          <div className="container-bars">
            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars ">
              <HorizontalSplitIcon style={{ color: "#000000", }} onClick={toggle} />
            </div>
          </div>

        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeclassname="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        {children}
      </main>
    </div>


  );
};

export default Sidebar;
