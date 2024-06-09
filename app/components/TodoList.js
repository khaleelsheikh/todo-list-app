"use client";

import { useState } from "react";

import React from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = index => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const removeTodos = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  
  return(
    <div className="max-w-xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">To-Do List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a new task"
                    className="flex-grow p-2 border rounded-l"
                />
                <button
                    onClick={addTodo}
                    className="bg-blue-500 text-white p-2 rounded-r"
                >
                    Add
                </button>
            </div>
            <ul className="list-none p-0">
                {todos.map((todo, index) => (
                    <li key={index} className={`flex justify-between items-center p-2 border mb-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                        <span
                            onClick={() => toggleComplete(index)}
                            className="cursor-pointer flex-grow"
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => removeTodos(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
  )
};

export default TodoList;
