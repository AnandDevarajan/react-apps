import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Theme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Theme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.color}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea.
      </p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeroSection;
