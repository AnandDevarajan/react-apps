import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      <Footer />
    </div>
  );
};

export default App;
