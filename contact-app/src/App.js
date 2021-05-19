import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
const App = () => {
  const contacts = [
    {
      id: "1",
      name: "Anand",
      email: "anand@123.com",
      phone:"29293929291"
    },
    {
      id: "2",
      name: "Anand2",
      email: "anand2@123.com",
      phone:"128322329291"
    },
  ];

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
