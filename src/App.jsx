import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Do exercises" },
    { id: 2, text: "Read a book" },
  ]);
  const [todoInput, setTodoInput] = useState("");

  function handleAddTodo() {
    if (todoInput.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: todoInput }]);
      setTodoInput("");
    }
  }
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <Header
        title="Todo App"
        description="Managing your tasks efficiently with our Todo App."
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
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
