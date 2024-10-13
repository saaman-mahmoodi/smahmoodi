import './App.css';

function App() {
  // Sample projects data
  const projects = [
    // {
    //   title: "Project 1: Pet Adoption Website",
    //   description: "A web application for pet adoption using HTML, CSS, JavaScript, and Flask.",
    //   link: "https://github.com/yourusername/pet-adoption"
    // },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Saaman Mahmoodi</h1>
        <p>Frontend Developer | Software Engineer</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/saaman-mahmoodi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/saaman-mahmoodi" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>
      <main>
        <section className="projects-section">
          <h2>My Projects</h2>
          {projects.map((project, index) => (
            <article key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
