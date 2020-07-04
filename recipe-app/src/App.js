import React, { useEffect, useState } from "react";
import {} from "dotenv/config";
import "./App.css";

const App = () => {
  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY;

  useEffect(() => {}, []);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
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
