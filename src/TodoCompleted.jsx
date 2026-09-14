import TodoList from "./TodoList";
import { useOutletContext } from "react-router-dom";

function TodoCompleted() {
  const { todos, editTodo, toggleComplete, deleteTodo } = useOutletContext();
  const completedTodos = todos.filter((todo) => todo.completed);
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
