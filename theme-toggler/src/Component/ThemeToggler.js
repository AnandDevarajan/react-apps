import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div >
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          marginBottom:"20px"
        }}
      >
        Switch to {themeMode === "light" ? "dark" : "light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggler;
