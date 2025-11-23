import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="cy-header">
      <div className="cy-logo">Cyborg Portfolio</div>

      <nav className="cy-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
