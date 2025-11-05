import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); 

  const handleShopNowClick = () => {
    navigate("/library"); 
  };

  return (
    <>
      <div id="hero">
        <h1 id="hero-title">Vinyl</h1>
        <h3 id="hero-promo">Find all your Favorite Songs!</h3>
        
        <div id="buy">
          <input className="Vinyl-search" placeholder="Search Album"></input>
          <input
            className="Date-search"
            type="date"
            placeholder="Release Date"
          ></input>
          <button id="date-btn">Search</button>
        </div>
        
        <button id="shop-now" onClick={handleShopNowClick}>
          Shop Now
        </button>
        
        <p className="hero-subtitle">Discover Amazing Vinyl Collections</p>
      </div>
    </>
  );
};

export default Hero;