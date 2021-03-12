import React from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = ({ setContactList, contact, setContact, isEditing, setIsEditing }) => {
  

  const handleInputChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }

  console.log({ contact });

  const handleSubmit = (event) => {
     event.preventDefault();
     const payload = {...contact, id: uuidv4()}

     const obj1 = {
       test1: '1',
       test2: '2'
     }

     const pl = {
       ...obj1,
       test1: '6',
       test1: '4',
       test1: '5'
     };

     setContactList((data) => {
       return [...data, payload];
     });

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
