import Header from "./Header";
import AxiosDemo from "./AxiosDemo";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Header
        title="Todo App"
        description="Managing your tasks efficiently with our Todo App."
      />
      <AxiosDemo />
    </div>
  );
}

export default Home;
