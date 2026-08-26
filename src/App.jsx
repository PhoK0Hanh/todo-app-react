import "./App.css";
import Header from "./Header";
import TodoItem from "./TodoItem";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Do exercises", completed: false },
    { id: 2, text: "Read a book", completed: false },
  ]);
  const [todoInput, setTodoInput] = useState("");

  function handleAddTodo() {
    if (todoInput.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: todoInput, completed: false },
      ]);
      setTodoInput("");
    }
  }
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleToggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  function handleEditTodo(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }

  return (
    <div>
      <Header
        title="Todo App"
        description="Managing your tasks efficiently with our Todo App."
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEditTodo}
            onToggle={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default App;
