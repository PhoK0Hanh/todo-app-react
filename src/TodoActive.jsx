import TodoList from "./TodoList";
import { useOutletContext } from "react-router-dom";

function TodoActive() {
  const { todos, editTodo, toggleComplete, deleteTodo } = useOutletContext();
  const activeTodos = todos.filter((todo) => !todo.completed);
  return (
    <TodoList
      todos={activeTodos}
      onEdit={editTodo}
      onToggle={toggleComplete}
      onDelete={deleteTodo}
    />
  );
}

export default TodoActive;
