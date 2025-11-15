

import styles from './Home.module.css';
import './Home.css';
import '../styles/AnimatedSolutions.css';
import React, { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';


function Home() {
  const images = [
    '/assets/Aryafrontview .png',
    '/assets/Adhyay front view.png'
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.dotBg}></div>
      <div className={styles['rigbetel-dark-bg']}>
        {/* Hero Section */}
        <section className={styles.heroRigbetelSection}>
          <div className={styles.heroRigbetelGlow}></div>
          <div className={styles.heroRigbetelFlex}>
            <div className={styles.heroRigbetelContent}>
              <h1 className={styles.heroRigbetelTitle}>
                We are building Intelligent Machine for smarter <span className={styles.indiaFlagText}>INDIA</span><br />
              </h1>
              <div className={styles.heroRigbetelSubtext}>
                Blending education with technology, we build robots and learning tools that spark curiosity and drive India’s growth in robotics and automation.
              </div>
              <button className={styles.heroRigbetelBtn}>Contact Us</button>
            </div>
            <div className={styles.heroRigbetelImageWrap} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Robot ${i+1}`}
                  className={`robot-image ${styles.heroRigbetelImg}`}
                  style={{
                    display: i === current ? 'block' : 'none',
                    width: i === 1 ? '55%' : '35%',
                    maxWidth: i === 1 ? '320px' : '180px',
                    minWidth: i === 1 ? '160px' : '100px',
                    margin: '0 auto',
                    position: 'relative'
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresRow}>
            <div className={styles.featureCard}>
              <img src="/assets/Industrial_Robotics.png" alt="Industrial Robotics" />
              <h3>Adaptive Consumer Robots</h3>
              <p>We design industrial robots that simplify operations, boost efficiency, and improve safety across manufacturing, logistics, and automation sectors.</p>
            </div>
            <div className={styles.featureCard}>
              <img src="/assets/AI_ML_Robotics.png" alt="AI & ML Robotics" />
              <h3>AI & ML Robotics</h3>
              <p>We build intelligent robots powered by AI and ML that can learn, adapt, and optimize themselves to handle complex real-world tasks.</p>
            </div>
            <div className={styles.featureCard}>
              <img src="/assets/Edu_Bot.png" alt="EduBot" />
              <h3>EdTech Robots</h3>
              <p>AI-driven learning assistants that guide students, answer questions, and personalize education—helping them learn faster and smarter.</p>
            </div>
          </div>
        </section>

        {/* Animated Solutions Section - replaces split feature section */}
        <section style={{ position: 'relative', zIndex: 10, background: '#0f0f1e', padding: '80px 0' }}>
          {/* Background Elements */}
          <h2
            style={{
              textAlign: 'center',
              /* use light violet instead of bright pink for the heading gradient */
              background: 'linear-gradient(90deg, #00f6ff 0%, #b56bff 50%, #b388ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 800,
              fontSize: '2.2rem',
              margin: '40px 0 30px 0',
              letterSpacing: '-1px',
            }}
          >
            From classrooms to industries, we create robots that teach, assist, and automate.
          </h2>
          <div className="bg-grid" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 30px', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, marginTop: 60 }}>
              {/* Robot Platform Card */}
              <div className="solution-card home-card">
                <div className="icon-wrapper">
                  <div className="robot-icon">
                    <div className="antenna" />
                    <div className="head">
                      <div className="eye left" />
                      <div className="eye right" />
                    </div>
                    <div className="body">
                      <div className="circuit" />
                      <div className="circuit" />
                    </div>
                    <div className="arm left" />
                    <div className="arm right" />
                  </div>
                </div>
                <div className="card-content">
                  <h2>Customize solutions<br />using our robot as base<br />platform</h2>
                  <p>Our mobile robots and robotic arms provide the foundation for solutions tailored to your specific needs.</p>
                </div>
              </div>
              {/* EduBot Card */}
              <div className="solution-card home-card">
                <div className="icon-wrapper">
                  <div className="edubot-icon">
                    <div className="brain" />
                    <div className="neural" />
                    <div className="neural" />
                    <div className="neural" />
                    <div className="book">
                      <div className="page" />
                      <div className="page" />
                      <div className="page" />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h2>EduBot</h2>
                  <p>AI-powered chatbots that provide personalized learning assistance to students.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - only on Home page, above footer */}
        <Gallery />
      </div>
    </>
  );
}

export default Home;