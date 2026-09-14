import { useState } from "react";
import { Link } from "react-router-dom";
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() === "") {
      alert("Todo text cannot be empty.");
      return;
    }
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <Link to={`/todos/${todo.id}`}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </Link>
          <span>{todo.completed ? " - Completed" : " - Pending"}</span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
