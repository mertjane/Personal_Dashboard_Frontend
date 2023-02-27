import React from "react";
import { useSelector } from "react-redux";

const TodoMenu = () => {
  const todoList = useSelector((state) => state.todos.todoList);

  return (
    <section className="menu-wrapper">
      <ul className="dropdown-list">
        <li>Inbox {todoList[0]?.inbox.length}</li>
        <li>Today {todoList[0]?.today.length}</li>
        <li>Done {todoList[0]?.done.length}</li>
      </ul>
    </section>
  );
};

export default TodoMenu;
