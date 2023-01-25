import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ShoppingList({ tasks, setTasks }) {
  const [inputData, setInputData] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (inputData === "") {
      alert("Enter product name");
    } else {
      setTasks([
        ...tasks,
        { id: uuidv4(), name: inputData, isCompleted: false },
      ]);
      setInputData("");
    }
  };

  return (
    <div>
      <form>
        <input
          className="w-2/6 py-4 rounded-3xl text-center shadow-2xl border-2 text-2xl border-solid border-yellow-400 cursor-cell hoover:bg-yellow-400 "
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Add product..."
          required
          value={inputData}
        />
        <button
          className="border-solid rounded-3xl shadow-2xl border-2 text-center text-2xl p-4 ml-2 bg-yellow-400  border-yellow-400 cursor-cell hover:bg-yellow-500"
          onClick={addTask}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default ShoppingList;
