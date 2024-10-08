import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../utilities/local-storage-manager.js";
import Avatar from "../Avatar.jsx";
import "./header.css";
import styled from "styled-components";

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? "block" : "none")};
  zin-index: 100;
`;

const MenuItem = styled.div`
  padding: 4px 10px;
  cursor: pointer;
  &:hover {
    background-color: #1868b8;
    border-radius: 4px;
    color: white;
  }
`;

const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
`;

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export default function Header() {
  const user = getFromLocalStorage("user");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const role = getFromLocalStorage("user").role;
  const handleOpen = () => {
    setOpen(!open);
  };

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <header className="container-header">
        <div className="header-content">
          <div className="logo">
            {role === "admin" ? (
              <img src="../../../public/hotel-svg.svg" alt="logo" />
            ) : (
              <Link to="/">
                <img src="../../../public/hotel-svg.svg" alt="logo" />
              </Link>
            )}
          </div>
          <div className="nav-buttons ">
            {user ? (
              <AvatarWrapper>
                <Avatar
                  handleclick={handleOpen}
                  name={user.name}
                  imageUrl={user.avatar}
                  size={40}
                />
                <DropdownMenu open={open}>
                  <MenuItem>
                    <Link className="menu-item" to="/#">
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="menu-item" to="/#">
                      Setting
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <TransparentButton onClick={logOut}>
                      LogOut
                    </TransparentButton>
                  </MenuItem>
                </DropdownMenu>
              </AvatarWrapper>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn login">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
