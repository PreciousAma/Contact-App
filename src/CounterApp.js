import React, { useState } from 'react';
import Button from './button.js'



const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  
  const handleIncreaseCounter = () => {
      setCounter(counter + 1);
  }
  
  const handleDecreaseCounter =  () => {
      setCounter(counter - 1);
  }

  const resetCounter = () => {
      setCounter(0);
  }
  
  return (
      <>
        <h2>counter app</h2>

        <h1>{counter}</h1>
        <Button buttonText="increase" buttonAction={handleIncreaseCounter} />
        <Button buttonText="decrease" buttonAction={handleDecreaseCounter} />
        <Button buttonText="Reset" buttonAction={resetCounter} />
      </>
  );
}

export default Counter;






