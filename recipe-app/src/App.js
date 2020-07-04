import React, { useEffect, useState } from "react";
import {} from "dotenv/config";
import "./App.css";

const App = () => {
  const APP_ID = "660a9f90";
  const APP_KEY = "e84a7b33cb7513e8d36d106d2a7c0758";

  useEffect(() => {
    getRecepies();
  }, []);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
    </div>
  );
};

export default App;
