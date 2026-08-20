import "./App.css";
import Header from "./Header";

function App() {
  function handleClick(event) {
    console.log(event.target.textContent);
  }

  return (
    <div>
      <Header
        title="Todo App"
        description="Managing your tasks efficiently with our Todo App."
        onHeaderClick={handleClick}
      />
      <p>Hello, I am learning React.</p>
      <p>I will build a Todo list application.</p>
    </div>
  );
}

export default App;
