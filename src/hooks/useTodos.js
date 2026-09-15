import { useEffect, useState } from "react";
import list from "../CheckList";

function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return list;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: newTodo.title,
        completed: false,
        priority: newTodo.priority,
        category: newTodo.category,
        important: newTodo.important,
        description: newTodo.description,
      },
    ]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function editTodo(id, newText) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleComplete,
    editTodo,
    totalTodos,
    completedTodos,
    remainingTodos,
  };
}

export default useTodos;
