import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-content');
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-container">
      <div className={`about-content ${isVisible ? 'animate-entry' : ''}`}>
        <div className="profile-container">
          <img src="../../Assets/FB_IMG_1646541955823.jpg" alt="Profile" className="profile-pic" />
        </div>
        <div className="text-content">
          <h1>About Me</h1>
          <p className='text-white'>
            My name is Sameer Ali, and I am a passionate web developer dedicated to crafting dynamic and responsive web applications.
            With a solid foundation in computer applications and specialized training in React.js, I thrive on turning complex problems
            into elegant solutions. I enjoy exploring new technologies, continuously improving my skills, and collaborating with others
            to create impactful user experiences. Outside of coding, I have a keen interest in photography and digital design, which I
            integrate into my work to ensure visually engaging and user-friendly interfaces.
          </p>
        </div>
        <div className="education-panel">
          <h2>Education</h2>
          <hr />
          <ul>
            <li>Bachelor of Computer Applications (BCA) From AJ CAMPUS</li>
            <li>Full Stack Developer</li>
            <li>Certification courses in React.js and other technologies</li>
            <li>12th grade in PCM stream from UK board</li>
            <li>10th grade from UK board</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
