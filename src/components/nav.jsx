import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-items">
          {/* <img className="icons" src={logo} alt=""></img> */}
          <input
            type="text"
            className="search-box"
            placeholder="search"
          ></input>
          <button className="search-btn">search</button>
          {/* <img className="icons" src={acct} alt=""></img>
          <img className="icons" src={cart} alt=""></img> */}
        </div>
        <div id="links">
          <Link className="navlink" to="/home">
            Home
          </Link>
          <Link className="navlink" to="/library">
            Library
          </Link>
          <Link className="navlink" to="/about">
            About Us
          </Link>
          <Link className="navlink" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;