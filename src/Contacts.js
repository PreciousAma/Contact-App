import React from 'react'
import Contact from './Contact';

const Contacts = ({ contactList, setContact, handleClear, handleDelete, setIsEditing })  => {

    return (
        <div className="contact-list">
            <h1 className="title">Contact List</h1>
                <div className="contacts">
                    <h2 className="all-contact">All Contacts ({contactList.length})</h2>
                    <button type="clear" className="btn clear-btn" name="clear_btn" value="clear" onClick={handleClear}>Clear</button>
                </div>
            <ul className="list">
                {contactList.map((contact) => {
                    return (
                        <Contact key={contact.id} contact={contact} setContact={setContact} handleDelete={handleDelete} setIsEditing={setIsEditing} />
                    )
                })}
            </ul>
        </div>    
    )
}

export default Contacts;

