import React from "react";
import Navbar from "./Navbar";
import "./css/styles.css";
import MastHead from "./MastHead";
const App = () => {
  return (
    <div>
      <Navbar title="Anand" />
      <MastHead
        title="Anand"
        image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
        info="Full Stack Devolepor"
      />
    </div>
  );
};

export default App;
