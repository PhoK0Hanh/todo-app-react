import "./App.css";
import Header from "./Header";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Do exercises", completed: false },
    { id: 2, text: "Read a book", completed: false },
  ]);

  function handleAddTodo(newTodo) {
    // setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
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
      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onToggle={handleToggleComplete}
        onDelete={handleDeleteTodo}
      />
      <TodoForm onAdd={handleAddTodo} />
    </div>
  );
}

export default App;
