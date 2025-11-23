import React from "react";
import "./Footer.css"; // Make sure file is Footer.css

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/clients">Clients</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-bottom">
          © 2025 Binsport. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
