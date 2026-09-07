import "./App.css";
import Header from "./Header";
import { useMemo, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodos from "./hooks/useTodos";

function App() {
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

  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "active") return !todo.completed;

      if (filter === "completed") return todo.completed;

      return true;
    });
  }, [todos, filter]);

  return (
    <div>
      <Header
        title="Todo App"
        description="Managing your tasks efficiently with our Todo App."
      />
      <div>
        <p>Total: {totalTodos}</p>
        <p>Completed: {completedTodos}</p>
        <p>Remaining: {remainingTodos}</p>
      </div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TodoList
        todos={filteredTodos}
        onEdit={editTodo}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
      />
      <TodoForm onAdd={addTodo} />
    </div>
  );
}

export default App;
