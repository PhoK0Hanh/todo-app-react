import TodoList from "./TodoList";
import { useOutletContext } from "react-router-dom";

function TodoAll() {
  const { todos, editTodo, toggleComplete, deleteTodo } = useOutletContext();
  return (
    <TodoList
      todos={todos}
      onEdit={editTodo}
      onToggle={toggleComplete}
      onDelete={deleteTodo}
    />
  );
}

export default TodoAll;
