import React, { useState } from 'react';
import BlogDetail from './BlogDetail';

const blogs = [
  {
    title: 'How Design Thinking Enhances Creativity and Problem Solving Skills in Students EcruxBot',
    image: '/assets/Blog1.webp',
    intro: 'Design thinking is a human-centered approach to problem-solving that emphasizes understanding user needs, fostering creativity, and encouraging iterative testing. In educational settings, particularly within STEM (Science, Technology, Engineering, and Mathematics) disciplines, design thinking has proven to be a powerful tool for enhancing students’ creativity and problem-solving…',
    button: 'Read More',
  },
  {
    title: 'EdTech and the Future of Personalized Learning: How AI Tailors Education to Each Student',
    image: '/assets/Blog2.jpg',
    intro: 'Today’s rapidly evolving educational landscape, technology plays a pivotal role in transforming traditional learning methods. Artificial intelligence (AI) stands at the forefront of this transformation, offering personalized learning experiences tailored to individual student needs. At EcruxBot, we are dedicated to integrating AI into education, ensuring that each learner receives a…',
    button: 'Read More',
  },
  {
    title: 'The Transformative Power of Hands On Learning in Robotics Education',
    image: '/assets/Blog3.jpg',
    intro: 'In today’s fast-paced, technology-driven world, robotics education has emerged as a cornerstone of STEM (Science, Technology, Engineering, and Mathematics) learning. While theoretical knowledge is essential, hands-on learning in robotics is revolutionizing how students engage with technology. By combining creativity, problem-solving, and technical skills, hands-on robotics…',
    button: 'Read More',
  },
  {
    title: 'The Power of Skill-Based Learning: Shaping the Future of Education',
    image: '/assets/Blog4.jpg',
    intro: 'In a rapidly evolving world, the traditional education system is no longer sufficient to prepare students for the challenges of the 21st century. The demand for skill-based education is growing as it equips learners with practical knowledge, critical thinking, and problem-solving abilities. At ecruxbot.in, we believe in…',
    button: 'Read More',
  },
  {
    title: 'How STEM Education Drives Progress Toward the UN SDGs',
    image: '/assets/Blog5.jpg',
    intro: 'In a world facing unprecedented challenges like climate change, poverty, and inequality, the United Nations Sustainable Development Goals (SDGs) provide a roadmap for a better future. These 17 global goals aim to address critical issues by 2030, from quality education to clean energy and gender equality…',
    button: 'Read More',
  },
  {
    title: 'Transforming Education with Robotics and AI Labs at EcruxBot',
    image: '/assets/Blog6.webp',
    intro: 'In today’s fast-paced, technology-driven world, the demand for skills in robotics and artificial intelligence (AI) is growing exponentially. At EcruxBot, we believe in empowering the next generation with the tools and knowledge they need to thrive in this digital era. Our Robotics and AI Labs…',
    button: 'Read More',
  },
  {
    title: 'EcruxBot: The Next Step in Educational Innovation',
    image: '/assets/Blog7.avif',
    intro: 'Education is the cornerstone of a progressive society, and the PM SHRI Schools initiative is a testament to India’s commitment to revolutionizing learning. At EcruxBot, we are proud to contribute to this transformative journey by integrating cutting-edge technology and innovative teaching methodologies. This blog explores how PM SHRI Schools are…',
    button: 'Read More',
  },
  {
    title: 'A New Era of Learning with Ecruxbot',
    image: '/assets/Blog8.png',
    intro: 'Education is the cornerstone of a progressive society, and the PM SHRI Schools initiative is a testament to India’s commitment to revolutionizing learning. At Ecruxbot, we are proud to contribute to this transformative journey by integrating cutting-edge technology and innovative teaching methodologies. This blog explores how PM SHRI Schools are…',
    button: 'Read More',
  },
  {
    title: 'Solar Operated Robotic Coding Artificial Intelligence Lab',
    image: '/assets/Blog9.jpg',
    intro: 'In the ever-evolving world of technology, robotics and artificial intelligence (AI) are reshaping the way we learn and innovate. At Ecruxbot, we are committed to making advanced technology accessible to students, educators, and professionals alike. To achieve this, we proudly present the “Robotic Coding Artificial Intelligence Lab,” a state-of-the-art initiative…',
    button: 'Read More',
  },
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }
  return (
    <div className="products-section" style={{ background: 'none' }}>
      <h2 className="products-title">Latest Posts</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2em' }}>
        {blogs.map((blog, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 4px 32px #6c3fcf33',
            width: '340px',
            minHeight: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1.5em 1.2em 1.2em 1.2em',
            marginBottom: '1.5em',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1em' }} />
            <div style={{ fontWeight: 800, fontSize: '1.25em', marginBottom: '0.5em', textAlign: 'center', wordBreak: 'break-word', whiteSpace: 'normal', lineHeight: '1.3', color: '#222' }}>{blog.title}</div>
            <div style={{ fontWeight: 600, color: '#222', marginBottom: '0.2em' }}>Introduction</div>
            <div style={{ color: '#444', fontSize: '1em', marginBottom: '1.2em', textAlign: 'left' }}>{blog.intro}</div>
            <button style={{ background: '#6c3fcf', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.6em 1.5em', fontWeight: 600, cursor: 'pointer', fontSize: '1em', boxShadow: '0 2px 8px #6c3fcf33', transition: 'background 0.2s' }}
              onClick={() => setSelectedBlog(blog)}
              onMouseEnter={e => e.currentTarget.style.background = '#4b249c'}
              onMouseLeave={e => e.currentTarget.style.background = '#6c3fcf'}
            >{blog.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}