import { projects } from '../data/portfolio'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-label reveal">Projects</p>
        <h2 className="section-title reveal">Academic projects</h2>
        <ul className="projects-grid">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="project-card reveal"
              style={{
                transitionDelay: `${index * 0.08}s`,
                '--project-accent': project.accent,
              }}
            >
              <div className="project-accent-bar" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
                <a
                  href={project.repoUrl}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
