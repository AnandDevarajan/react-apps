import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
