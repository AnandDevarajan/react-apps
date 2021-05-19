import React, { useState } from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
const AddContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    if (name === "" || phone === "") {
      alert("Enter all the details");
      return;
    }
    console.log(name, phone);
  };

  return (
    <Container fluid className="mt-5">
      <Card className="px-3 py-3 ml-auto mr-auto" style={{ width: "35rem" }}>
        <Card.Header as="h1" className="text-center text-info">
          Add Contact
        </Card.Header>
        <Form onSubmit={addContact}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              style={{
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              style={{
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddContact;
