import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import user from "../images/download.png";

const ContactCard = ({ contact }) => {
  return (
    <Card style={{ width: "18rem" }} className="ml-auto mr-auto mb-3 ">
      <Card.Body>
        <Image src={user} style={{ width: "30px", objectFit: "contain" }} />
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.phone}</Card.Text>
        <Button className="btn-sm btn-dark mr-5">Edit</Button>
        <Button className="btn-sm btn-danger ml-5">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
