import React, { useState } from 'react';
import CourseDetail from './CourseDetail';
import './AboutUs.css';
import homeStyles from './Home.module.css';
const courses = [
  {
    name: 'Raspberry Pi Pico W : Basic & Intermediate',
    image: '/assets/Skill1.png',
    desc: 'Mastering Raspberry Pi PICO W Basic & Intermediate Course',
    tag: 'Basic & Intermediate',
  },
  {
    name: 'Mastering Raspberry Pi Pico W : Advanced & Beyond',
    image: '/assets/Skill2.png',
    desc: 'Mastering Raspberry Pi PICO W Advance Course',
    tag: 'Advance',
  },
  {
    name: 'Self Navigating Robot using ROS 2',
    image: '/assets/Skill3.png',
    desc: 'Self Navigating Robot using ROS2 Course',
    tag: 'Ros2',
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  if (selectedCourse !== null) {
    return (
      <CourseDetail course={courses[selectedCourse]} onBack={() => setSelectedCourse(null)} />
    );
  }
  return (
    <div className={homeStyles['rigbetel-dark-bg']}>
      <div className={homeStyles.dotBg} />
      <div className={homeStyles.rightGlow} />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="products-section">
        <h2 className="products-title">All The Skills You Need</h2>
        <div className="products-list">
          {courses.map((course, idx) => (
            <div className="product-card light-bg-box" key={idx}>
              <img src={course.image} alt={course.name} className="product-image" />
              <div className="product-details">
                <div className="product-title">{course.name}</div>
                <div className="product-desc">{course.desc}</div>
                <div className="product-price" style={{ color: '#ffb300' }}>{course.tag} Course</div>
                <button className="product-btn" onClick={() => setSelectedCourse(idx)}>
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}