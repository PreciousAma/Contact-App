import React from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = ({ setContactList, contact, setContact, isEditing, setIsEditing }) => {
  

  const handleInputChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     const payload = { id: uuidv4(), ...contact };

     if (!isEditing) {
        setContactList((data) => {
          return [...data, payload];
        });
     } else {
       setContactList((contactList) => {
          const contactIndex = contactList.findIndex((contact) => contact.id === payload.id);
          const newArr = [...contactList];
          newArr.splice(contactIndex, 1, payload);

          return newArr;
       });
       setIsEditing(false);
     }

     setContact({
      firstName: '',
      lastName: '',
      phoneNumber: ''
    })
  };

  return (
    <div className="form-wrap">
      <h1>Contact Form</h1>
      <p>Please fill the form below</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <Input id="firstname" value={contact.firstName} name="firstName" placeholder="First Name" handleChange={handleInputChange} />
        </div>
        <div className="form-group">
          <Input id="lastname" value={contact.lastName} name="lastName" placeholder="Last Name" handleChange={handleInputChange} />
        </div>
        <div className="form-group">
          <Input id="phonenumber" value={contact.phoneNumber} name="phoneNumber" placeholder="Phone Number" handleChange={handleInputChange} />
        </div>

        <input type="submit" className="btn" name="sumbit_btn" value={isEditing ? "Save" : "Submit" } />
      </form>
    </div>
  )
}

export default ContactForm;
