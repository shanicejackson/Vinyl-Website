import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { getCartItemCount } = useCart();
  
  return (
    <>
      <div className="nav">
        <div className="nav-items">
          <div className="nav-brand">Nene's Vinyls</div>
          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search albums, artists..."
            ></input>
            <button className="search-btn">Search</button>
          </div>
        </div>
        <div id="links">
          <div className="nav-links-left">
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
          <div className="cart-nav">
            <Link className="navlink cart-link" to="/cart">
              Cart ({getCartItemCount()})
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;