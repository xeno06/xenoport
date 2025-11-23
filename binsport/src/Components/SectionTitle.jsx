// src/Components/SectionTitle.jsx
import React from "react";
import "./section.css"; // Make sure this matches the actual file name

export default function SectionTitle({ title }) {
  return <h2 className="section-title">{title}</h2>;
}
