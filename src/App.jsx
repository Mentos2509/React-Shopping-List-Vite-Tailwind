import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingItem from "./components/ShoppingItem";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App flex flex-col pt-10 text-center bg-blue-200 h-screen font-mono">
      <h1 className="py-8 text-4xl font-bold">Shopping List</h1>
      <ShoppingList tasks={tasks} setTasks={setTasks} />
      <ShoppingItem tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
