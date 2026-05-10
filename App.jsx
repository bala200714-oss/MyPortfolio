import { useState } from 'react';

const sections = [
  {
    title: 'Profile',
    description:
      'Bala Murali S is a Full Stack Developer building polished web applications with React, Node.js, and modern UX design.',
    highlights: ['React & Vite', 'Responsive interfaces', 'API-driven architecture', 'Performance-first design'],
  },
  {
    title: 'Skills',
    description: 'A strong toolkit for front-end and back-end development.',
    highlights: ['JavaScript / ES2024', 'React.js', 'Node.js / Express', 'HTML & CSS / Tailwind-ready'],
  },
  {
    title: 'Contact',
    description: 'Ready to collaborate on ambitious applications and digital products.',
    highlights: ['bala200714@gmail.com', '9843830486', 'Remote-friendly', 'Fast delivery'],
  },
];

const projectItems = [
  {
    title: 'Dynamic Web Portfolio',
    tag: 'React UI',
    description: 'A modern portfolio experience with animated cards, custom gradients, and responsive layouts.',
  },
  {
    title: 'Interactive Dashboard',
    tag: 'Full Stack',
    description: 'Clean admin-style dashboard with data visualization and mobile-first usability.',
  },
  {
    title: 'API-driven App',
    tag: 'Backend',
    description: 'Service integrations with REST APIs, optimized error handling, and secure endpoints.',
  },
];

function App() {
  const [active, setActive] = useState('Profile');

  return (
    <div className="page-shell">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEVELOPER</p>
          <h1>BALA MURALI S</h1>
          <p>
            Crafting engaging, responsive web experiences with React, JavaScript,
            and thoughtful design. Transforming ideas into fast, modern user
            interfaces.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/resume.txt" download>
              Download Resume
            </a>
            <a className="secondary-button" href="#projects">
              View Works
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-strip">Portfolio Highlights</div>
          <div className="hero-stat">
            <span>4+</span>
            <p>Years building web apps</p>
          </div>
          <div className="hero-stat">
            <span>20+</span>
            <p>Projects completed</p>
          </div>
          <div className="hero-stat">
            <span>100%</span>
            <p>Responsive and polished</p>
          </div>
        </div>
      </div>

      <div className="section-grid">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I build production-ready web applications using React and Node.js.
            I specialize in creating clean interfaces, strong cross-device
            layouts, and performance-first development.
          </p>
          <div className="info-row">
            <span>Location</span>
            <strong>India</strong>
          </div>
          <div className="info-row">
            <span>Email</span>
            <strong>bala200714@gmail.com</strong>
          </div>
          <div className="info-row">
            <span>Phone</span>
            <strong>9843830486</strong>
          </div>
        </div>

        <div className="interactive-panel">
          <div className="tab-list">
            {sections.map((section) => (
              <button
                key={section.title}
                className={active === section.title ? 'tab active' : 'tab'}
                onClick={() => setActive(section.title)}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {sections
              .filter((section) => section.title === active)
              .map((section) => (
                <div key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <ul>
                    {section.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <div>
            <span>Selected Works</span>
            <h2>Projects</h2>
          </div>
          <div className="section-actions">
            <a className="primary-button" href="/resume.txt" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="project-grid">
          {projectItems.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Designed & built by Bala Murali S — Full Stack Developer</p>
      </footer>
    </div>
  );
}

export default App;
