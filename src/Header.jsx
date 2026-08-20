function Header({ title, description, onIncrease, onDecrease }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </header>
  );
}

export default Header;
