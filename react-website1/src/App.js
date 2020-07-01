import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Appsection from "./Appsection";
import Cardsection from "./Cardsection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cardsection />
      <Appsection />
      <Footer />
    </div>
  );
};

export default App;
