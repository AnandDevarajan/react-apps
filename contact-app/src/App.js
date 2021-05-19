import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      <Footer />
    </div>
  );
};

export default App;
