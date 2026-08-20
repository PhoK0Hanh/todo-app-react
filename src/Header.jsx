function Header({ title, description, onHeaderClick }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onHeaderClick}>Click me</button>
    </header>
  );
}

export default Header;
