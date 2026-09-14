import TodoList from "./TodoList";
import { useOutletContext } from "react-router-dom";

function TodoCompleted() {
  const { filteredTodos, editTodo, toggleComplete, deleteTodo } =
    useOutletContext();
  const completedTodos = filteredTodos.filter((todo) => todo.completed);
  return (
    <TodoList
      todos={completedTodos}
      onEdit={editTodo}
      onToggle={toggleComplete}
      onDelete={deleteTodo}
    />
  );
}

export default TodoCompleted;
