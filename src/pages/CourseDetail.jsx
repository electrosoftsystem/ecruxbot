import React from 'react';
import sampleCourseImg from '../assets/sample-course.png';
import './CourseDetail.css';

export default function CourseDetail({ course, onBack }) {
  if (course) {
    // Use the same centered, image-on-top design for all courses
    let title = '';
    let subtitle = '';
    let desc = '';
    let learnPoints = [];
    if (course.tag === 'Ros2') {
      title = 'Self Navigating Robot using ROS 2';
      subtitle = 'Python Programming | Autonomous Robots | Raspberry pi';
      desc = 'Master Robotics and become a robotic operating system developer | Step by Step guide |';
      learnPoints = [
        '✔️ Master ROS2 core Concept',
        '✔️ Use Robotic Operating System 2 with Python',
        '✔️ Discover ROS2 Tools',
        '✔️ Interface different sensor and actuators with RPI',
        '✔️ Learn SLAM and NAV2',
        '✔️ Build a self-navigating robot using ros2',
      ];
    } else if (course.tag === 'Advance') {
      title = 'Mastering Raspberry Pi Pico W : Advanced & Beyond';
      subtitle = '';
      desc = 'Dive into the advanced realm of Raspberry Pi Pico W with our comprehensive course, Adhyay 1: Advanced Raspberry Pi Pico W Projects. This course builds on your foundational knowledge, offering deep insights and practical experience with sophisticated projects, advanced sensors, and cutting-edge applications. Ideal for those who are ready to tackle complex challenges and enhance their skills in electronics and programming.';
      learnPoints = [
        '✔️ Design and implement sophisticated systems using Raspberry Pi Pico W.',
        '✔️ Build complex IoT, robotics, and automation projects.',
        '✔️ Integrate multiple sensors and modules for real-world applications.',
        '✔️ Develop advanced programming skills with MicroPython and CircuitPython.',
        '✔️ Solve practical challenges with innovative, cutting-edge solutions.',
      ];
    } else {
      title = 'Raspberry Pi Pico W : Basic & Intermediate';
      subtitle = 'Mastering Raspberry Pi PICO W Basic & Intermediate Course';
      desc = 'Welcome to Adhyay 1: Mastering Raspberry Pi Pico W, the ultimate course designed to transform you into a skilled Raspberry Pi Pico W developer. This course offers a comprehensive introduction to the Pico W and takes you through various projects using an extensive range of sensors and modules. Whether you’re a beginner or an electronics enthusiast, this course will provide you with the knowledge and hands-on experience you need. This course offers a blend of theoretical knowledge and practical experience, utilizing Thonny IDE, MicroPython, and CircuitPython to bring your projects to life.';
      learnPoints = [
        '✔️ Master the basics and advanced features of Raspberry Pi Pico W.',
        '✔️ Interface with various sensors, modules, and hardware components.',
        '✔️ Build hands-on projects, including robotics and IoT applications.',
        '✔️ Program with MicroPython and CircuitPython using Thonny IDE.',
        '✔️ Develop skills to create innovative, real-world solutions.',
      ];
    }
    return (
      <div className="course-detail-bg">
        <div className="course-detail-card" style={{maxWidth: '820px', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <button
            onClick={onBack}
            aria-label="Back to courses"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(90deg, #a259ff 0%, #ff8ae2 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '18px',
              fontWeight: 800,
              fontSize: '1.25em',
              padding: '0.5em 1.7em',
              margin: '0 0 1.5em 0',
              boxShadow: '0 2px 18px #b388ff33',
              cursor: 'pointer',
              transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
              position: 'absolute',
              top: '0.7em',
              left: '0.7em',
              zIndex: 10
            }}
            onMouseOver={e => {e.currentTarget.style.background='linear-gradient(90deg, #a259ff 0%, #ffb6f9 100%)';e.currentTarget.style.transform='scale(1.04)';}}
            onMouseOut={e => {e.currentTarget.style.background='linear-gradient(90deg, #a259ff 0%, #ff8ae2 100%)';e.currentTarget.style.transform='none';}}
          >
            <span style={{fontSize: '1.2em', marginRight: 4}}>←</span> <span>Back</span>
          </button>
          <img src={course.image} alt={course ? course.name : 'Course Image'} className="course-detail-img" style={{maxWidth: '260px', margin: '0 auto 1.5em auto', borderRadius: '16px', boxShadow: '0 2px 18px #b388ff44'}} />
          <h1 className="course-detail-title" style={{color: '#b794f4', fontSize: '2.1em', marginBottom: '0.5em', marginTop: '0.2em'}}>{title}</h1>
          <div style={{fontWeight: 700, color: '#fbbf24', fontSize: '1.15em', marginBottom: '0.5em'}}>{course.tag} Course</div>
          {subtitle && <div style={{color:'#fff',marginBottom:'1em',fontWeight:500,fontSize:'1.08em'}}>{subtitle}</div>}
          <p className="course-detail-desc" style={{color:'#fff', marginBottom:'1.2em'}}>{desc}</p>
          {/* Last points: What you'll learn */}
          <div className="course-detail-learn" style={{margin: '1.2em 0 0 0', width: '100%', maxWidth: '700px', textAlign: 'left'}}>
            <h2 style={{color: '#7c3aed', fontWeight: 800, fontSize: '1.3em', marginBottom: '0.7em'}}>What you'll learn</h2>
            <ul style={{columns: 2, columnGap: '2em', listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '1.08em'}}>
              {learnPoints.map((point, idx) => (
                <li key={idx} style={{marginBottom: '0.5em', color: '#a78bfa'}}>{point}</li>
              ))}
            </ul>
          </div>
          <button className="course-detail-enroll" style={{margin: '1.5em auto 0 auto', width: '70%', fontSize: '1.1em'}}>View Course</button>
        </div>
      </div>
    );
  }
  return null;
}
