import './App.css';
import React, { useState } from 'react';

const Title = () => {
  return (
    <h1>Contact Form</h1>
  );
}

const Button = () => {
  return (
    <button>submit</button>
  );
}

const App = () => {
  const [title, setTitle] = useState('Contact app');

  const handleChangeTitle = () => {
    setTitle('Contact Form');
  }

  return (
    <div className="App">
      React Functional Component

      <h2>{title}</h2>
      <button onClick={handleChangeTitle}>Change title</button>
    </div>
  );
}

export default App;
