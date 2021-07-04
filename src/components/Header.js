import "./Header.css";

function Header() {
  return (
    <div className="header flex-row">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT</a>
    </div>
  );
}

export default Header;
