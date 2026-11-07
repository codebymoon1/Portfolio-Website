
import profilePic from './assets/profile.png'

import {
  Mail,
  ArrowUpRight,
  Code2,
  Globe,
  Terminal,
} from 'lucide-react'

import './App.css'

const skills = [
  { name: 'HTML5', level: 'Frontend' },
  { name: 'CSS3', level: 'Frontend' },
  { name: 'JavaScript', level: 'Frontend' },
  { name: 'React', level: 'Frontend' },
  { name: 'Python', level: 'Programming' },
  { name: 'Git & GitHub', level: 'Tools' },
  { name: 'Vite', level: 'Tools' },
  { name: 'SQL', level: 'Database' },
]

const projects = [
  {
    number: '01',
    title: 'Unseen Pakistan',
    category: 'Tourism Platform',
    description:
      'A platform dedicated to discovering Pakistan’s hidden destinations, local experiences, and tourism opportunities.',
    status: 'In Progress',
    link: 'https://github.com/codebymoon1/Unseen-PAKISTAN',
  },
  {
    number: '02',
    title: 'AI Freelance Agent',
    category: 'Python / Automation',
    description:
      'An AI-powered freelance assistant designed to discover opportunities and help automate parts of the application process.',
    status: 'In Progress',
    link: 'https://github.com/codebymoon1',
  },
]

const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Web Development',
    description:
      'Building responsive and modern websites using HTML, CSS, JavaScript, and React.',
  },
  {
    icon: <Terminal size={22} />,
    title: 'Python & Automation',
    description:
      'Creating beginner-friendly Python tools, scripts, and automation solutions.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Creative Projects',
    description:
      'Turning ideas into practical digital experiences and useful applications.',
  },
]

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Arzanish<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <div className="availability">
                <span className="status-dot"></span>
                Available for opportunities
              </div>

              <span className="eyebrow">
                HELLO, I'M ARZANISH 👋
              </span>

              <h1>
                Building digital experiences that{' '}
                <span>make an impact.</span>
              </h1>

              <p className="hero-description">
                I'm a developer in progress, passionate about building
                modern websites, exploring technology, and turning ideas
                into reality.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  Explore my work <ArrowUpRight size={18} />
                </a>

                <a href="#contact" className="secondary-button">
                  Get in touch
                </a>
              </div>

              <div className="hero-footer">
                <span>Based in Pakistan</span>
                <span>Big Data Technology Student</span>
              </div>
            </div>

            <div className="hero-image">
              <img src={profilePic} alt="Arzanish" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <span className="section-label">01 / ABOUT</span>

          <div className="section-heading">
            <h2>
              Developer in progress.
              <br />
              <span>Builder by mindset.</span>
            </h2>

            <p>
              I'm a Big Data Technology student with a growing passion
              for software development. I enjoy learning by building,
              experimenting with new technologies, and working on
              projects that solve real problems.
              <br />
              <br />
              My journey is just getting started, and I'm focused on
              improving every day.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" id="skills">
          <span className="section-label">02 / SKILLS</span>

          <div className="section-title-row">
            <h2>Tools I work with.</h2>
            <p>Learning, building, and improving.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <span className="section-label">03 / PROJECTS</span>

          <div className="section-title-row">
            <h2>Things I'm building.</h2>
            <p>Ideas turned into work in progress.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / {project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View project <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <span className="section-label">04 / WHAT I DO</span>

          <div className="section-title-row">
            <h2>What I can help with.</h2>
            <p>Practical solutions through code.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <span className="section-label">05 / CONTACT</span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            I'm open to beginner-friendly freelance projects,
            collaborations, and opportunities to learn.
          </p>

          {/* CONTACT BUTTONS */}
          <div className="contact-actions">
            {/* Gmail Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadarzanish4@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <Mail size={18} />
              Get in touch
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923278639952?text=Hi%20Arzanish%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              aria-label="Contact me on WhatsApp"
              title="WhatsApp me"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/codebymoon1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
<a
    href="https://www.linkedin.com/in/arzanish-asad-4397133b4/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn <ArrowUpRight size={15} />
  </a>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Arzanish<span>.</span>
        </a>

        <p>Designed and built by Arzanish © 2026</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
