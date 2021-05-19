import React from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
const AddContact = () => {
  return (
    <Container fluid className="mt-5">
      <Card className="px-3 py-3 ml-auto mr-auto" style={{ width: "35rem" }}>
        <Card.Header as="h1" className="text-center text-info">
          Add Contact
        </Card.Header>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none",
              }}
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
