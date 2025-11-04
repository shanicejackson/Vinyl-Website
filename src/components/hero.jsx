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
        <div id="buy">
          <input className="Vinyl-search" placeholder="Album"></input>
          <input
            id="Date Album was Made"
            className="Date-search"
            type="date"
          ></input>
          <button id="date-btn">Search</button>
        </div>
        <h3 id="hero-promo">!Find all your Favorite Songs!</h3>
        <button id="shop-now" onClick={handleShopNowClick}>
          Shop Now
        </button>
        <h3 id="hero-promo">!Shop Now!</h3>
        <h1 id="hero-title">Vinyl</h1>
      </div>
    </>
  );
};

export default Hero;