import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoForm({ onAdd }) {
  const initialForm = {
    title: "",
    priority: "medium",
    category: "work",
    important: false,
    description: "",
  };
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (form.title.trim() !== "") {
        onAdd(form);
        setForm(initialForm);
        navigate("/todos/all");
      }
    } catch (error) {
      console.log("Thêm Todo thất bại:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: checked,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="work">Work</option>
        <option value="study">Study</option>
        <option value="personal">Personal</option>
      </select>
      <label>Important: </label>
      <input
        name="important"
        type="checkbox"
        checked={form.important}
        onChange={handleChange}
      />
      <textarea
        name="description"
        type="text"
        value={form.description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
