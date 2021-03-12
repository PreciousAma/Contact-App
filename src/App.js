import React, { useState } from 'react';
import './App.css';
import Contacts from './Contacts';
import ContactForm from './ContactForm';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleClear = () => {
    setContactList([])
  }

  const handleDelete = (contact) => {
    setContactList((oldContactList) => { 
      const newContactList = oldContactList.filter((data) =>  { return contact.id !== data.id });
      return newContactList;
    });
  }

  return (
    <div className="container">
      <ContactForm
        setContactList={setContactList}
        contact={contact}
        setContact={setContact}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <Contacts
        contactList={contactList}
        setContact={setContact}
        handleClear={handleClear}
        handleDelete={handleDelete}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
