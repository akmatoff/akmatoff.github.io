import "./Header.css";

function Header() {
  return (
    <header className="header flex-row centered">
      <div className="header-inner flex-row">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      </div>
    </header>
  );
}

export default Header;
