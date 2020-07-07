import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center text-white text-uppercase fixed-bottom p-3"
      style={{ backgroundColor: "black" }}
    >
      Github search app with firebase
    </Container>
  );
};

export default Footer;
