import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Component/Header.";
import HeroSection from "./Component/HeroSection";
import "./App.css";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
