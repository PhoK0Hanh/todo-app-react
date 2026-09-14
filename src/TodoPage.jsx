import TodoForm from "./TodoForm";
import useTodos from "./hooks/useTodos";
import FetchDemo from "./FetchDemo";
import { NavLink, Outlet } from "react-router-dom";

function TodoPage() {
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
        to="all"
        className={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        All
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="active"
        className={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Active
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="completed"
        className={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Completed
      </NavLink>
      <Outlet
        context={{
          todos,
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
