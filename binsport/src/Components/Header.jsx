import React from "react";
import "./header.css"; // make sure filename matches exactly

export default function header() {
  return (
    <header className="cy-header">
      <div className="cy-logo">Binsport</div>

      <nav className="cy-nav">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/clients">Clients</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
