import React from "react";
import Navbar from "./Navbar";
import "./css/styles.css";
import MastHead from "./MastHead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact"
import Footer from "./Footer"
const App = () => {
  return (
    <div>
      <Navbar title="Anand" />
      <MastHead
        title="Anand"
        image="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
        info="Full Stack Devolepor"
      />
      <Portfolio />
      <About para1="Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization." 
      para2="You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!"/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
