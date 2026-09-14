import TodoList from "./TodoList";
import { useOutletContext } from "react-router-dom";

function TodoAll() {
  const { filteredTodos, editTodo, toggleComplete, deleteTodo } =
    useOutletContext();
  return (
    <TodoList
      todos={filteredTodos}
      onEdit={editTodo}
      onToggle={toggleComplete}
      onDelete={deleteTodo}
    />
  );
}

export default TodoAll;
