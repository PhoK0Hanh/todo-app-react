import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";

function TodoApiDemo() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        setError("Failed to load Todos data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleAddTodo = () => {
    createTodo({
      title: "Learn CRUD",
      completed: false,
    })
      .then((response) => {
        setTodos((prevTodos) => [...prevTodos, response.data]);
      })
      .catch((error) => {
        setError("Failed to create Todos data");
      });
  };
  const handleUpdateTodo = (id) => {
    updateTodo(id, {
      title: "Updated Todo",
      completed: true,
    })
      .then((response) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? response.data : todo)),
        );
      })
      .catch((error) => {
        setError("Failed to update Todos data");
      });
  };
  const handleDeleteTodo = (id) => {
    deleteTodo(id)
      .then((response) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        setError("Failed to delete Todos data");
      });
  };
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <ul>
            {todos?.slice(0, 10).map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title}
                <button onClick={() => handleUpdateTodo(todo.id)}>
                  Update
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
      )}
    </div>
  );
}

export default TodoApiDemo;
