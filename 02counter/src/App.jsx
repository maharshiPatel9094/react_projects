// importing useState hook 
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
// this hook is responsible for changing the state
// setCounter basically controls the counter
  let [counter,setCounter] = useState(15)  
  // function for adding the value
  const addValue = () =>{
    if(counter >= 20){
      setCounter(0)
    }else{
      setCounter(counter+1)
    }
  }


  const decreaseValue = () =>{
    if(counter <= 0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>

    </>
  );
}

export default App;
