import React from 'react';
import './Skills.css';

const skills = [
  {
    title: 'AI & ML Robotics',
    desc: 'Hands-on learning with AI and ML robotics kits for all levels.'
  },
  {
    title: 'Embedded Systems',
    desc: 'Explore microcontrollers, sensors, and real-world automation.'
  },
  {
    title: 'STEM Education',
    desc: 'Creative kits and projects for science, technology, engineering, and math.'
  },
  {
    title: 'Home Automation',
    desc: 'Smart home projects and security systems for practical skills.'
  },
  {
    title: 'IoT Projects',
    desc: 'Build connected devices and internet-of-things applications.'
  },
  {
    title: 'Circuit Design',
    desc: 'Learn circuit design principles and PCB prototyping.'
  }
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Our Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
