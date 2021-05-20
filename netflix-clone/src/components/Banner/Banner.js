import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          nihil. Doloremque corporis voluptatem eaque doloribus ab, odit eum rem
          iusto alias iste ullam, non repellat quia veniam dignissimos animi
          quis!
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
