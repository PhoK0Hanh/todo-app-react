import { useRef, useState } from "react";

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        onAdd(inputValue.trim());
        setInputValue("");
        inputRef.current.focus();
      }
    } catch (error) {
      console.log("Thêm Todo thất bại:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
