import React from 'react'
import Button from './Button'

const Contact = ({ contact, setContact, handleDelete, setIsEditing }) => {
  
  const handleSetEdit = () => {
    setContact(contact);
    setIsEditing(true);
  }

  return (
        <li>
          {contact.firstName} {contact.lastName} {contact.phoneNumber}
          <Button buttonAction={handleSetEdit} buttonText="Edit" /> <Button buttonAction={() => handleDelete(contact)} buttonText="Delete" />
        </li>
    )
}

export default Contact;
