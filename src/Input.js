import React from 'react';

const Input = ({ id, name, value, placeholder, handleChange }) => {
   return (
       <input
        type="text"
        required
        className="input"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      /> 
   ) 
}

export default Input;