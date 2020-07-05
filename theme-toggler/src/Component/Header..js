import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <h1
        style={{
          backgroundColor: "black",
          color: "#fff",
        }}
      >
        Theme Toggler
      </h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
