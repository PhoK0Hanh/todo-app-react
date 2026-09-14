import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import TodoPage from "./TodoPage";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import TodoAll from "./TodoAll";
import TodoActive from "./TodoActive";
import TodoCompleted from "./TodoCompleted";
import TodoDetail from "./TodoDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/todos"
            className={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Todos
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/about"
            className={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/contact"
            className={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoPage />}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path="all" element={<TodoAll />} />
            <Route path="active" element={<TodoActive />} />
            <Route path="completed" element={<TodoCompleted />} />
            <Route path=":id" element={<TodoDetail />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
