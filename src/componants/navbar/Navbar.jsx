import React from "react";
import logo from "../../assets/images/logo2.png"
import "./navbar.css";

const Navbar = () => {
 
  console.log("navbar rendered!");
  return (
    <div className="navbar">
      <div className="navbarWrapper">
      
        <div className="navbarRight">
        <span className="span1">Welcome back,<br/>Jenny!</span>
          <img
            className="avatar"
            src={logo}
            alt=""
          />
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
