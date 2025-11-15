import React, { useState } from 'react';
import './AboutUs.css';

export default function AboutUs() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="aboutus-wrapper">
      {/* Hero/Headline Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-glow"></div>
        <h1 className="aboutus-title" style={{ fontSize: '2.8em', fontWeight: 900, marginBottom: '0.3em', letterSpacing: '-1px' }}>
          Smarter Robots. Simpler Automation.<br />Stronger Impact.
        </h1>
        <div style={{ color: '#e0e0e0', fontSize: '1.18em', marginBottom: '1.7em', maxWidth: 700, margin: '0 auto' }}>
          We design intelligent machines that solve problems — not just perform tasks.From Edtech Tasks to Cosumer floors, our robots do it all.
        </div>
        <div style={{ display: 'flex', gap: '1.2em', justifyContent: 'center', marginBottom: '2.5em', flexDirection: 'column', alignItems: 'center' }}>
          <button
            className="aboutus-hero-btn"
            style={{ background: '#fff', color: '#18111c', fontWeight: 700, borderRadius: 8, padding: '0.7em 2em', fontSize: '1.1em', border: 'none', boxShadow: '0 2px 8px #a259ff33', cursor: 'pointer', marginBottom: '1em' }}
            onClick={() => setShowVideo(v => !v)}
          >
            Watch 2-minute Demo
          </button>
          {showVideo && (
            <video controls autoPlay style={{ maxWidth: '480px', width: '100%', borderRadius: '12px', boxShadow: '0 2px 12px #a259ff33' }}>
              <source src="/assets/lv_0_20250918153518.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>

      {/* Vision/Mission Section */}
      <section className="aboutus-vision-section">
          <div className="aboutus-vision-card" style={{padding: '2.5em 0 1.5em 0', background: 'none'}}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5em',
              flexWrap: 'wrap',
              background: 'rgba(34,22,43,0.98)',
              borderRadius: '2em',
              boxShadow: '0 4px 32px #a259ff33',
              padding: '2.5em 2em',
              maxWidth: 1100,
              margin: '0 auto 2em auto',
              position: 'relative',
            }}>
              {/* Left color bar for accent */}
              <div style={{position: 'absolute', left: 0, top: 32, bottom: 32, width: 8, borderRadius: 8, background: 'linear-gradient(180deg,#a259ff 0%,#b388ff 100%)', zIndex: 1}}></div>
              {/* Vision Text */}
              <div style={{flex: '1 1 380px', minWidth: 260, zIndex: 2, paddingLeft: 24}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
                  {/* <span style={{fontSize: '2.1em', marginRight: 12}}>🚀</span> */}
                  <span style={{
                    fontWeight: 900,
                    fontSize: '2em',
                    letterSpacing: '-1px',
                    background: 'linear-gradient(90deg,#a259ff 30%,#b388ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: '#fff',
                  }}>Our Vision</span>
                </div>
                <div style={{fontWeight: 700, fontSize: '1.18em', color: '#fff', marginBottom: 10, letterSpacing: '0.01em'}}>
                  Ecruxbot: Where Vision Meets <span style={{color:'#a259ff'}}>Robotics Precision</span>
                </div>
                {/* <div style={{fontWeight: 900, fontSize: '1.25em', color: '#fff', margin: '18px 0 8px 0'}}>Our Vision</div> */}
                <p style={{color: '#e0e0e0', fontSize: '1.08em', marginBottom: 12, lineHeight: 1.6}}>
                  Welcome to <b style={{color:'#b388ff'}}>Ecruxbot</b>, where your vision meets our robotics precision. Innovation and education converge in the dynamic world of robotics. Founded by visionary engineers, We see a future where robots are not limited to factories they teach, assist, and inspire.
Ecruxbot exists to make that future ready.
                </p>
                <div style={{fontWeight: 700, color: '#b388ff', marginBottom: 6, fontSize: '1.08em'}}>Our Specialization</div>
                <div style={{color: '#fff', fontSize: '1.08em', marginBottom: 8}}>At Ecruxbot, we focus on developing:</div>
                <ul style={{marginBottom: 14, marginLeft: 18, color: '#fff', fontSize: '1.08em', listStyle: 'disc'}}>
                  <li>Consumer Robots</li>
                  <li>Autonomous Robots</li>
                  <li>Industrial Robots</li>
                  <li>Educational Robots</li>
                  
                </ul>
                <div style={{color: '#a259ff', fontWeight: 700, fontSize: '1.08em', marginBottom: 0}}>
                  Our goal is to nurture a generation of creators who not only understand robotics but use it to shape smarter, safer, and more efficient industries.
                </div>
              </div>
              {/* Vision Image */}
              <div style={{flex: '0 1 320px', minWidth: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
                <img src="/assets/vision.jpg" alt="Ecruxbot Vision" style={{width: '100%', maxWidth: 320, borderRadius: 18, boxShadow: '0 4px 32px #a259ff55', background: '#18111c'}} />
              </div>
            </div>
          </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="aboutus-apart" style={{margin: '3em 0 2em 0', width: '100%'}}>
  <h2 className="aboutus-apart-title" style={{fontWeight: 900, fontSize: '2.3em', letterSpacing: '-1px', background: 'linear-gradient(90deg,#a259ff 30%,#b388ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>What Sets Us Apart</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5em', margin: '2.5em 0 0 0'}}>
          {/* Innovation Card */}
          <div style={{
            background: 'rgba(34,22,43,0.85)',
            borderRadius: '1.5em',
            boxShadow: '0 4px 32px #a259ff33, 0 0 0 2px #a259ff22',
            padding: '2.2em 1.7em 1.7em 1.7em',
            textAlign: 'center',
            width: 300,
            minHeight: 340,
            position: 'relative',
            transition: 'box-shadow 0.35s, transform 0.35s',
            border: '2px solid transparent',
            backdropFilter: 'blur(6px)',
          }}
            onMouseOver={e => {e.currentTarget.style.boxShadow='0 12px 48px #a259ff77, 0 0 0 4px #b388ff55';e.currentTarget.style.transform='translateY(-10px) scale(1.06)';e.currentTarget.style.border='2px solid #a259ff'}}
            onMouseOut={e => {e.currentTarget.style.boxShadow='0 4px 32px #a259ff33, 0 0 0 2px #a259ff22';e.currentTarget.style.transform='none';e.currentTarget.style.border='2px solid transparent'}}
          >
            <div style={{fontSize: '2.5em', marginBottom: 10, filter: 'drop-shadow(0 2px 8px #a259ff88)'}}>🤖</div>
            <h3 style={{color: '#a259ff', fontWeight: 900, fontSize: '1.25em', marginBottom: 10, letterSpacing: '0.5px'}}>Innovation</h3>
            <p style={{color: '#fff', fontSize: '1.08em', marginBottom: 18}}>
              We are leaders in the development of advanced robots that expand the possibilities of automation. Our team of specialists focuses on designing robots that are smarter, more versatile, and more reliable. Our commitment to excellence drives us to continually improve and redefine the future of robotics.
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              {/* <img src="/assets/AI_ML_Robotics.png" alt="Innovation" style={{width: 80, height: 80, borderRadius: 12, background: '#18111c', boxShadow: '0 2px 16px #a259ff33'}} /> */}
            </div>
          </div>
          {/* Quality Card */}
          <div style={{
            background: 'rgba(34,22,43,0.85)',
            borderRadius: '1.5em',
            boxShadow: '0 4px 32px #a259ff33, 0 0 0 2px #a259ff22',
            padding: '2.2em 1.7em 1.7em 1.7em',
            textAlign: 'center',
            width: 300,
            minHeight: 340,
            position: 'relative',
            transition: 'box-shadow 0.35s, transform 0.35s',
            border: '2px solid transparent',
            backdropFilter: 'blur(6px)',
          }}
            onMouseOver={e => {e.currentTarget.style.boxShadow='0 12px 48px #a259ff77, 0 0 0 4px #b388ff55';e.currentTarget.style.transform='translateY(-10px) scale(1.06)';e.currentTarget.style.border='2px solid #a259ff'}}
            onMouseOut={e => {e.currentTarget.style.boxShadow='0 4px 32px #a259ff33, 0 0 0 2px #a259ff22';e.currentTarget.style.transform='none';e.currentTarget.style.border='2px solid transparent'}}
          >
            <div style={{fontSize: '2.5em', marginBottom: 10, filter: 'drop-shadow(0 2px 8px #a259ff88)'}}>🛡️</div>
            <h3 style={{color: '#a259ff', fontWeight: 900, fontSize: '1.25em', marginBottom: 10, letterSpacing: '0.5px'}}>Quality</h3>
            <p style={{color: '#fff', fontSize: '1.08em', marginBottom: 18}}>
              We prioritize the highest industry standards to guarantee that our robots are designed for longevity. Rigorous testing, premium materials, and continuous improvement ensure our robots meet and exceed expectations for quality and durability.
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              {/* <img src="/assets/qua.jpg" alt="Quality" style={{width: 80, height: 80, borderRadius: 12, background: '#18111c', boxShadow: '0 2px 16px #a259ff33', objectFit: 'cover'}} /> */}
            </div>
          </div>
          {/* Education Card */}
          <div style={{
            background: 'rgba(34,22,43,0.85)',
            borderRadius: '1.5em',
            boxShadow: '0 4px 32px #a259ff33, 0 0 0 2px #a259ff22',
            padding: '2.2em 1.7em 1.7em 1.7em',
            textAlign: 'center',
            width: 300,
            minHeight: 340,
            position: 'relative',
            transition: 'box-shadow 0.35s, transform 0.35s',
            border: '2px solid transparent',
            backdropFilter: 'blur(6px)',
          }}
            onMouseOver={e => {e.currentTarget.style.boxShadow='0 12px 48px #a259ff77, 0 0 0 4px #b388ff55';e.currentTarget.style.transform='translateY(-10px) scale(1.06)';e.currentTarget.style.border='2px solid #a259ff'}}
            onMouseOut={e => {e.currentTarget.style.boxShadow='0 4px 32px #a259ff33, 0 0 0 2px #a259ff22';e.currentTarget.style.transform='none';e.currentTarget.style.border='2px solid transparent'}}
          >
            <div style={{fontSize: '2.5em', marginBottom: 10, filter: 'drop-shadow(0 2px 8px #a259ff88)'}}>📚</div>
            <h3 style={{color: '#a259ff', fontWeight: 900, fontSize: '1.25em', marginBottom: 10, letterSpacing: '0.5px'}}>Education</h3>
            <p style={{color: '#fff', fontSize: '1.08em', marginBottom: 18}}>
              We are dedicated to cultivating future roboticists through robust education and training programs. Our focus is on AI and ML robotics, providing a comprehensive learning experience for the next generation.
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              {/* <img src="/assets/ed.jpg" alt="Education" style={{width: 80, height: 80, borderRadius: 12, background: '#18111c', boxShadow: '0 2px 16px #a259ff33', objectFit: 'cover'}} /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      {/* <section className="aboutus-offer">
        <h2 className="aboutus-offer-title">Our Offerings</h2>
        <div className="aboutus-offer-row">
          <div className="aboutus-offer-col">
            <img src="/assets/Industrial_Robotics.png" alt="Industrial Robotics" />
            <h3>Industrial Robotics</h3>
            <p>Our industrial robots are developed to streamline manufacturing, enhance productivity, and improve product quality through automation and precision.</p>
          </div>
          <div className="aboutus-offer-col">
            <img src="/assets/robot-main.png" alt="AI & ML Robotics" />
            <h3>AI & ML Robotics</h3>
            <p>Integrating AI and ML with robotics creates groundbreaking advancements, enabling robots to perform complex tasks with greater precision and adaptability.</p>
          </div>
        </div>
        <div className="aboutus-offer-row">
          <div className="aboutus-offer-col">
            <img src="/assets/Edu_Bot.png" alt="EduBot" />
            <h3>EduBot</h3>
            <p>EduBot is an AI-powered chatbot designed to offer personalized education and support to students, providing tailored resources and assistance for a more engaging and productive educational experience.</p>
          </div>
        </div>
      </section> */}

      {/* Our Team Section */}
      <section className="aboutus-team">
        <h2>Our Team</h2>
        <div className="aboutus-team-row">
          {/* HITENDRA */}
          <div className="aboutus-team-card">
            <img src="/assets/team1.jpg" alt="HITENDRA" className="team-image" />
            <div className="team-overlay">
              <div className="team-name">HITENDRA</div>
              <div className="team-role">CO-FOUNDER</div>
            </div>
          </div>
          {/* GURU */}
          <div className="aboutus-team-card">
            <img src="/assets/team2.png" alt="GURU" className="team-image" />
            <div className="team-overlay">
              <div className="team-name">GURU</div>
              <div className="team-role">CO-FOUNDER</div>
            </div>
          </div>
          {/* BHAGYESH */}
          <div className="aboutus-team-card">
            <img src="/assets/team3.jpg" alt="BHAGYESH" className="team-image" />
            <div className="team-overlay">
              <div className="team-name">BHAGYESH</div>
              <div className="team-role">CO-FOUNDER</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones & Achievements Section (full animation and cards) */}
      <section className="milestones-animated">
        <div className="bg-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="particles" id="particles-js"></div>
        <div className="container">
          <div className="title-block">
            <h1>
              <span>E</span><span>c</span><span>r</span><span>u</span><span>x</span><span>b</span><span>o</span><span>t</span><span>,</span>
              <span> </span>
              <span>K</span><span>e</span><span>y</span>
              <span> </span>
              <span>M</span><span>i</span><span>l</span><span>e</span><span>s</span><span>t</span><span>o</span><span>n</span><span>e</span><span>s</span>
            </h1>
            <p>Major achievements and growth milestones of Ecruxbot</p>
          </div>
          <div className="grid">
            {/* 2020 */}
            <div className="card">
              <div className="badge">2020</div>
              <h3>Founded at MIT Pune</h3>
              <p>Initial seed capital of ₹8 lakh from competition winnings</p>
            </div>
            {/* 2021 */}
            <div className="card">
              <div className="badge">2021</div>
              <h3>First international client</h3>
              <p>Singapore-based logistics firm<br/>Secured first Indian defence sector contract<br/>Achieved first break-even quarter</p>
            </div>
            {/* 2022 */}
            <div className="card">
              <div className="badge">2022</div>
              <h3>Strategic partnership with NVIDIA</h3>
              <p>TSARAC Slim integration<br/>Obtained ISO 9001 certification<br/>Launched Diadem UGV series</p>
            </div>
            {/* 2023 */}
            <div className="card">
              <div className="badge">2023</div>
              <h3>Hosted PiCSON-2 India</h3>
              <p>Received ROS 2 Humble Hawksbill compatibility certification<br/>Named Most Promising Robotics Startup by NASSCOM<br/>Established POS Mentorship Program<br/>Reached 1000+ program graduates</p>
            </div>
            {/* 2024 */}
            <div className="card">
              <div className="badge">2024</div>
              <h3>Launched Diadem Mini for light industrial applications</h3>
              <p>Expanded to 25 countries across ASEAN and MENA<br/>Won Qualcomm Design Challenge for edge AI implementations<br/>Achieved PCT OSS compliance for cloud control systems<br/>TortoiseBot adopted by 38 technical institutes</p>
            </div>
          </div>
        </div>
      </section>

      <div className="aboutus-bottom-gradient"></div>
    </div>
  );
}