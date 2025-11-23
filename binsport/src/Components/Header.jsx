import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure exact casing

export default function Header() {
  return (
    <header className="cy-header">
      <div className="cy-logo">Binsport</div>

      <nav className="cy-nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
