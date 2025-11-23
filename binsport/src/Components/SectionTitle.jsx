import React from "react";
import "./section.css";   // <-- This is where you import the CSS

export default function SectionTitle({ text }) {
  return <h2 className="section-title">{text}</h2>;
}
