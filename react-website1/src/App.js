import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Appsection from "./Appsection";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Appsection />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
