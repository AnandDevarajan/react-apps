import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div>
      onClick=
      {() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
      <span>
        {themeMode === "light" ? "Switch to dark" : "switch to light mode"}
      </span>
    </div>
  );
};

export default ThemeToggler;
