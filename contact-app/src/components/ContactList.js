import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactList = ({ contacts }) => {
  console.log(contacts);

  const renderContactList = contacts.map((contact) => {
    return (
      <Card style={{ width: "18rem" }} className="ml-auto mr-auto">
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {contact.email}
          </Card.Subtitle>
          <Card.Text>{contact.phone}</Card.Text>
          <Button className="btn-sm btn-dark mr-5">Edit</Button>
          <Button className="btn-sm btn-danger ml-5">Delete</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="mt-5">
      <h1 className="text-center text-success">Contact List</h1>
      {renderContactList}
    </div>
  );
};

export default ContactList;
