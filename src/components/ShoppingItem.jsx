import React from "react";

function ShoppingItem({ tasks, setTasks }) {
  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  const scratchItem = (item) => {
    item.isCompleted = !item.isCompleted;
    setTasks([...tasks]);
  };

  return (
    <div className="flex flex-col self-center w-1/3 mr-20 ">
      {tasks.map((item) => (
        <div key={item.id}>
          <div className="border-solid rounded-3xl p-2 shadow-2xl cursor-cell border-2 border-yellow-400 m-2 bg-white flex hover:bg-yellow-400">
            <div>
              <input
                onChange={() => scratchItem(item)}
                type="checkbox"
                checked={item.isCompleted}
              />
              <button
                className="border-solid border-2 rounded-3xl text-xs p-1 mx-1 bg-blue-200 border-grey-200 hover:bg-blue-400"
                onClick={() => removeTask(item.id)}
              >
                Remove
              </button>
            </div>

            <div
              className="ml-5"
              style={{
                textDecoration: item.isCompleted ? "line-through" : "unset",
              }}
            >
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingItem;
