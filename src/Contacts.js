import React from 'react'
import Contact from './Contact';

const Contacts = ({ contactList, setContact, handleClear, handleDelete, setIsEditing })  => {

    return (
        <div className="contact-list">
            <h1 className="title">Contact List</h1>
            <button type="clear" className="btn" name="clear_btn" value="clear" onClick={handleClear}>Clear</button>
            <ol className="list">
                {contactList.map((contact) => {
                    return (
                        <Contact key={contact.id} contact={contact} setContact={setContact} handleDelete={handleDelete} setIsEditing={setIsEditing} />
                    )
                })}
            </ol>
        </div>    
    )
}

export default Contacts;

