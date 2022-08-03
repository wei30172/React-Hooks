import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { todosApi } from "../../api/todosApi";
import "./TodoList.scss";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await todosApi
      .get("/")
      .then(({ data }) => setTodos(data))
      .catch((error) => console.log(error));
  };

  const addTodo = async (newTodo) => {
    await todosApi
      .post("/", newTodo)
      .then(() => {
        setTodos((todos) => [newTodo, ...todos])
      })
      .catch((error) => console.log(error));
  };

  const updateTodo = async (updatedTodo) => {
    const { completed } = updatedTodo;
    
    await todosApi
      .patch(`/${updatedTodo.id}`, updatedTodo)
      .then(() => {
        setTodos((prevTodos) => {
          let updatedTodos = [...prevTodos].map((todo) => {
            if (todo.id === updatedTodo.id) {
              return { ...todo, completed };
            }
            return todo;
          });
          return updatedTodos;
        });
      })
      .catch((error) => console.log(error));
  };

  const deleteTodo = async ({ id }) => {
    await todosApi
      .delete(`/${id}`, id)
      .then(() => {
        setTodos((prevTodos) => {
          let updatedTodos = [...prevTodos].filter((todo) => todo.id !== id);
          return updatedTodos;
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      userId: 1,
      id: Math.floor(Math.random() * (1000 - 201) + 201),
      title: newTodo,
      completed: false
    });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit} className="flex">
      <label htmlFor="new-todo" />
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter New Todo"
        />
      </div>
      <button className="submit cursor-pointer">✚</button>
    </form>
  );
  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        ))}
    </main>
  );
};

export default TodoList;
