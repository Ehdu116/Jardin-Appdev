export default function Projects() {
    return (
      <div className="projects-page">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Task Management</h3>
            <p>A simple yet efficient task management web app that helps users organize to-dos, set deadlines, and track progress. Built using React.js and localStorage for quick prototyping.</p>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">localStorage</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>React E-commerce</h3>
            <p>A responsive e-commerce website built with React.js featuring product listings, a shopping cart, and a checkout flow and Laravel for the backend.</p>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Laravel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
    