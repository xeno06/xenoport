import React from "react";
import "./footer.css";   // <-- Import CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </div>

        <div className="footer-bottom">
          © 2025 Binsport. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
