import TodoForm from "./TodoForm";
import useTodos from "./hooks/useTodos";
import FetchDemo from "./FetchDemo";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

function TodoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleComplete,
    editTodo,
    totalTodos,
    completedTodos,
    remainingTodos,
  } = useTodos();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const searchValue = searchParams.get("search");
  const filteredTodos = todos.filter((todo) => {
    if (!searchValue) {
      return true;
    }

    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <h1>Todo Page</h1>
      {/* <FetchDemo /> */}
      <div>
        <p>Total: {totalTodos}</p>
        <p>Completed: {completedTodos}</p>
        <p>Remaining: {remainingTodos}</p>
      </div>
      <NavLink
        to={searchValue ? `all?search=${searchValue}` : "all"}
        className={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        All
      </NavLink>{" "}
      |{" "}
      <NavLink
        to={searchValue ? `active?search=${searchValue}` : "active"}
        className={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Active
      </NavLink>{" "}
      |{" "}
      <NavLink
        to={searchValue ? `completed?search=${searchValue}` : "completed"}
        className={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Completed
      </NavLink>
      <div>
        <p>Search:</p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearchParams({ search })}>Search</button>
      </div>
      <Outlet
        context={{
          filteredTodos,
          editTodo,
          toggleComplete,
          deleteTodo,
        }}
      />
      <TodoForm onAdd={addTodo} />
    </div>
  );
}

export default TodoPage;
