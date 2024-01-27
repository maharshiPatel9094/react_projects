import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  // ----------------------------------------Decclaring all our variables---------------------------------------------------------//

  // here 8 is the default length for the use case
  const [length, setLength] = useState(8);
  // here false is the default value bcz we need to select the numbers if we want so it is false
  const [numberAllowed, setNumberAllowed] = useState(false);
  // here false is the default value bac we have an option that we need characters in our password or not
  const [characterAllowed, setCharacterAllowed] = useState(false);
  // for password
  const [password, setPassword] = useState("");

  // password generator function
  // useCallback takes two parameters function and dependencies
  // function can be delared in two ways simple and by arrow function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (characterAllowed) {
      str = str + "!@#$%^&*-+_=[]{}~'";
    }
    // loop for looping the alphabets based on the length
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // using use effect hook
  // take two dependencies
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, passwordGenerator]);

  // using useRef hook
  const passwordRef = useRef(null);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white mb-3 my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(event) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number-input">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="character-input"
              onChange={(event) => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character-input">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
