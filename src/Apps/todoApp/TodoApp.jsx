import React, { useState } from "react";

const TodoApp = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  const handleEvent = (event) => {
    setData(event.target.value);
  };

  const allData = () => {
    setItems((oldData) => [...oldData, data]);
    setData("");
  };

  const deleteItems = (index) => {
    setItems((oldData) => {
      const updatedData = [...oldData];
      updatedData.splice(index, 1);
      return updatedData;
    });
  };

  return (
    <div className="flex text-center justify-center mt-20">
      <div className="shadow-2xl rounded w-auto bg-zinc-500 pt-3 pb-3 pl-6 pr-6">
        <h1 className="container text-2xl p-4 font-bold text-slate-100">
          To-Do App
        </h1>
        <div className="container w-60 p-4">
          <input
            type="text"
            value={data}
            onChange={handleEvent}
            className="w-full px-4 py-2 mb-4 border rounded"
            placeholder="Add your task"
          />
          <button
            onClick={allData}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Add
          </button>

          {items.map((val, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-2 mt-4 bg-gray-100"
            >
              <span>{val}</span>
              <button
                onClick={() => deleteItems(index)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                X
              </button>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default TodoApp;
