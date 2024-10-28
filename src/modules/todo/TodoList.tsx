"use client";
import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<any>([]);
  const [newTodo, setNewTodo] = useState<any>("");

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = async () => {
    const data: any = JSON.stringify({ text: newTodo });

    const response = await fetch("/api/todos/add");
    const addedTodo = await response.json();
    console.log(addedTodo, "addedTodo");
    setTodos([...todos, addedTodo]);
    setNewTodo("");
  };

  const toggleComplete = async (id: any, completed: any) => {
    await fetch("/api/todos/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, completed }),
    });
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a to-do item
  const deleteTodo = async (id: any) => {
    await fetch("/src/api/todos/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };
  console.log(todos, "todos");

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(todo.id, !todo.completed)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoList;
