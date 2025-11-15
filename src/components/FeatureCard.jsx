import React from 'react';
import './FeatureCard.css';

export default function FeatureCard({ title, description, image }) {
  // Split description by '•' for line by line display
  const lines = description.split('•').filter(Boolean);
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <ul className="feature-desc-list">
        {lines.map((line, idx) => (
          <li key={idx}>{line.trim()}</li>
        ))}
      </ul>
    </div>
  );
}
