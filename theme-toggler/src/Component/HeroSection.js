import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        padding: "1rem",
        minHeight:"100vh",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <p>This is a nice paragraph</p>
    </div>
  );
};

export default HeroSection;
