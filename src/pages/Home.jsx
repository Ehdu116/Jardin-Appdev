import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Hello There! 👋</h1>
        <p className="lead">Welcome to my personal website. I'm <strong>Gabrielle Anne Jardin</strong>, an enthusiastic coder and curious learner exploring the world of tech and creativity.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="primary-button">View My Work</Link>
          <Link to="/contact" className="secondary-button">Get in Touch</Link>
        </div>
      </section>
      
      <section className="quick-links">
        <div className="link-card">
          <h3>About Me</h3>
          <p>Learn more about my journey and interests</p>
          <Link to="/about">Read More →</Link>
        </div>
        <div className="link-card">
          <h3>Education</h3>
          <p>Explore my academic background</p>
          <Link to="/education">View Details →</Link>
        </div>
        <div className="link-card">
          <h3>Projects</h3>
          <p>Check out my latest work</p>
          <Link to="/projects">See Projects →</Link>
        </div>
      </section>
    </div>
  );
}
  