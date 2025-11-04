import React from "react";

const About = () => {
  return (
    <div className="App">
      <div className="content">
        <div className="photo-container">
          <h1 className="photo-title">Nene's Vinyls</h1>
          <img
            className="photo"
            src="https://www.superiorgiftwrap.com/store/media/images-2015/LGW/R902.jpg"
            alt="Music Peace"
          />
        </div>
        <div className="homepage-description-box">
          <p className="homepage-description">
            Welcome to Nene's Vinyls, where we aim to give you the music you
            love. We give you music that you can take back to the past but also
            the present and soon the future. I really enjoy music and I really
            love vinyls. I find vinyls very amazing. A blast from the past. I
            decided to explore my passion by selling music vinyls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;