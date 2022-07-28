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

  const addTodo = async (todo) => {
    await todosApi
      .post("/", todo)
      .then(({ data }) => setTodos((todos) => [data, ...todos]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    console.log(newTodo);
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
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
    </main>
  );
};

export default TodoList;
