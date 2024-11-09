import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      let Rchar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Rchar);
    }
    setpassword(pass);
  }, [length, num, char]);

  // Return statement is now inside the App function
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700  ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full py-2 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-blue-500 py-0.5 px-3 shrink-0 text-white">
            Copy
          </button>
        </div>

        {/* length slide rko div */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        {/* checkbox ko div */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={num}
            id="numberInput"
            onChange={() => {
              setnum((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
      </div>
    </>
  );
}

export default App;
