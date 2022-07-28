import React from "react";
import { todosApi } from "../../api/todosApi";
import "./TodoItem.scss";

const TodoItem = ({ todo, todos, setTodos }) => {
  const updateTodo = async (todo) => {
    await todosApi
      .patch(`/${todo.id}`, todo)
      .then(({ data }) => {
        const updatedUsers = todos.map((item) => {
          if (item.id === todo.id) item = data;
          return item;
        });
        setTodos(updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const deleteTodo = async ({ id }) => {
    await todosApi
      .delete(`/${id}`, id)
      .then(
        setTodos(
          todos.filter((todo) => {
            return todo.id !== id;
          }),
        ),
      )
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <div className="todo">
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.completed}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
        <button
          className="delete cursor-pointer"
          onClick={() => deleteTodo({ id: todo.id })}
        >
          ❌
        </button>
      </div>
    </article>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.completed === nextProps.todo.completed
  );
};

const memorizedTodoItem = React.memo(TodoItem, areEqual);

export default memorizedTodoItem;
