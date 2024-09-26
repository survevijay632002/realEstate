import React, { useContext, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "../../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const user = currentUser;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/agents">Agents</NavLink>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            {/* <span>{currentUser.username}</span> */}
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/register" className="  bg-blue-600 p-33">
              singn up
            </Link>

            <Link to="/login" className="  bg-blue-600 p-33">
              login
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/Agents">Agents</NavLink>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
