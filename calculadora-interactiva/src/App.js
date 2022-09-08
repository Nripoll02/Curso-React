import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import Clear from "./components/Clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const Result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter a valid input");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Display input={input} />

        <div className="row">
          <Button listenClick={addInput}>1</Button>
          <Button listenClick={addInput}>2</Button>
          <Button listenClick={addInput}>3</Button>
          <Button listenClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button listenClick={addInput}>4</Button>
          <Button listenClick={addInput}>5</Button>
          <Button listenClick={addInput}>6</Button>
          <Button listenClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button listenClick={addInput}>7</Button>
          <Button listenClick={addInput}>8</Button>
          <Button listenClick={addInput}>9</Button>
          <Button listenClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button listenClick={Result}>=</Button>
          <Button listenClick={addInput}>0</Button>
          <Button listenClick={addInput}>.</Button>
          <Button listenClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Clear listenClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
