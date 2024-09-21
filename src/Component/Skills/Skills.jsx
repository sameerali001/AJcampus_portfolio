import React, { useEffect, useState } from 'react';
import './Skills.css'; // Custom CSS for animations

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.skills-container');
      if (element.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="skills" className={`skills-container ${isVisible ? 'in-view' : ''}`}>
      <div className="container py-3">
        <h2 className="text-center mb-4 text-white">My Skills</h2>
        <div className="row g-4">
          {/* JavaScript Skill */}
          <div className="col-md-4 skill-card">
            <div className="card">
              <img 
                src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" 
                alt="JavaScript" 
                className="card-img-top " 
              />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">Experienced in JavaScript and its frameworks such as React.js.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: isVisible ? '90%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Skill */}
          <div className="col-md-4 skill-card">
            <div className="card">
              <img 
                src="https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png" 
                alt="CSS" 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
                <p className="card-text">Proficient in CSS and responsive design using Bootstrap and custom styling.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: isVisible ? '80%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* HTML Skill */}
          <div className="col-md-4 skill-card">
            <div className="card">
              <img 
                src="https://www.cnet.com/a/img/resize/b9b09bd80b3129a6a5da79d9bd17487b977c9677/hub/2014/10/27/40194e6e-2544-419e-a340-f7c17b2e83c5/html5-wow-image-w3c.jpg?auto=webp&width=768" 
                alt="HTML" 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Strong understanding of HTML5 and semantic markup.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: isVisible ? '85%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* React Skill */}
          <div className="col-md-4 skill-card">
            <div className="card">
              <img 
                src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" 
                alt="React" 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">Skilled in building dynamic UIs with React and its ecosystem.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: isVisible ? '85%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Node.js Skill */}
          <div className="col-md-4 skill-card">
            <div className="card">
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256" 
                alt="Node.js" 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">Node.js</h5>
                <p className="card-text">Experienced in server-side development with Node.js.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: isVisible ? '75%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Git Skill */}
          <div className="col-md-4 skill-card">
            <div className="card">
              <img 
                src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" 
                alt="Git" 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">Git</h5>
                <p className="card-text">Proficient in version control using Git and GitHub.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: isVisible ? '70%' : '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
