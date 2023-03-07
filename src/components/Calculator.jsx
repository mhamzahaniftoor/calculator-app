import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap';

export const Calculator = () => {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) =>{
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  const minus = (e) =>{
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  const mul = (e) =>{
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  const div = (e) =>{
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }
  
  const restInput = (e) =>{
    e.preventDefault();
    inputRef.current.value = 0;
  }
  const resetResult =(e)=>{
    e.preventDefault();
    setResult((result) => result * 0)
  }


  return (
    <div>
      <div>
        <h1> Simplest Working Calculator </h1>
      </div>
      <form>
        <p>{result}</p>
        <input
        type = "number"
        ref = {inputRef}
        pattern ='[0-9]'
        placeholder = 'Type a number'
         />
        <Button onClick={plus}>Add</Button>
        <Button onClick={minus}>Sub</Button>
        <Button onClick={mul}>Mul</Button>
        <Button onClick={div}>Div</Button>
        <Button onClick={restInput}>Reset Input</Button>
        <Button onClick={resetResult}>Reset Result</Button>

      </form>
    </div>
  )
}
