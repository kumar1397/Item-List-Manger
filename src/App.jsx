import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const handleAddItem = () => {
    if (input.trim() !== "") {
      const updatedItems = [...items, input];
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      setInput(""); // Clear the input field after adding
    }
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center h-full">
      {/* Sticky Header */}
      <div className="flex flex-col items-center justify-center bg-zinc-800 w-full h-24 fixed top-0">
        <span className="text-7xl text-green-400">Item List Manager</span>
      </div>

      {/* Content below the sticky header */}
      <div className="flex flex-col w-3/4 items-center justify-center mt-28"> {/* Add margin to avoid overlap */}
      <div className="flex flex-row items-center justify-between w-full space-x-4"> 
      <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          className="w-full h-12 bg-gray-400 mt-4"
        />
        <button onClick={handleAddItem} className="bg-green-500 text-white p-2 mt-4 w-32 h-12">
          Add Item
        </button>
      </div>
      
        <span className="text-5xl">Item List</span>
        
        <ul className="mt-4">
          {items.map((item, index) => (
            <li key={index} className="text-2xl">
              {item}
            </li>
          ))}
        </ul>
        
      </div>
    </div>

  );
}

export default App;
