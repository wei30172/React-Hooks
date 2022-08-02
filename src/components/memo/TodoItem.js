import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
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

export default TodoItem;
