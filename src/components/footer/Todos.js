import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos, moveToDone } from "../../redux/todo/services";
import { TodoWrapper } from "./Todo.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import TodoMenu from "./TodoMenu";

const Todos = () => {
  const dispatch = useDispatch();
  const todoMenuRef = useRef();
  const todoList = useSelector((state) => state.todos.todoList[0] || {});
  const auth = useSelector((state) => state.auth);

  const [openMenu, setOpenMenu] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (!todoMenuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await addNewTodo({ auth, newTodo }, dispatch);
      setNewTodo("");
      await dispatch(fetchTodos({ auth }));
    },
    [auth, dispatch, newTodo]
  );

  const handleTodoSelect = (todo) => {
    setSelectedTodo(todo);
      moveToDone({ auth, todo }, dispatch);
  };

  return (
    <TodoWrapper openMenu={openMenu}>
      <section className="header">
        <h3 id="title" title="Today" onClick={() => setOpenMenu(true)}>
          Today
          <MdOutlineKeyboardArrowDown id="icon" title="Menu" />
        </h3>
        <BsThreeDots id="menu-icon" />
      </section>
      <section
        ref={todoMenuRef}
        className={`todo-menu ${openMenu ? "active" : "inactive"}`}
      >
        <section id="arrow" />
        <TodoMenu />
      </section>
      <section className="body">
        <ul className="list">
          {todoList?.today?.map((item, index) => (
            <li id={`${selectedTodo === item ? "selected" : "items"}`} key={index}>
              <input type="checkbox" onChange={() => handleTodoSelect(item)} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <form onSubmit={handleSubmit} className="footer">
        <input
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
          placeholder="New Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button type="submit"></button>
      </form>
    </TodoWrapper>
  );
};

export default Todos;
