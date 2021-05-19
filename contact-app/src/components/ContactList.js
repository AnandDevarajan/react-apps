import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center text-success">Contact List</h1>
      {renderContactList}
    </div>
  );
};

export default ContactList;
