import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#fff", color: "#000", padding: "20px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontFamily: "cursive" }}>Elizabeth Harmon</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
