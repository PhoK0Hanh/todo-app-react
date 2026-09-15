import { useParams, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
function TodoDetail() {
  const { id } = useParams();
  const todoId = Number(id);
  const { filteredTodos, editTodo, toggleComplete, deleteTodo } =
    useOutletContext();
  const todo = filteredTodos.find((todo) => todo.id === todoId);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Detail</h1>
      <div>
        {todo ? (
          <>
            <p>ID: {id}</p>
            <p>Text: {todo.text}</p>
            <p>Status: {todo.completed ? "Completed" : "pending"}</p>
          </>
        ) : (
          <p>Todo not found</p>
        )}
      </div>
      <button onClick={() => navigate("/todos")}>Back to Todos</button>
    </div>
  );
}

export default TodoDetail;
