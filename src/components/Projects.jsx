import { projects } from '../data/content';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <header className="section-heading">
        <h2 id="projects-title">Selected projects</h2>
        <p>Software products built across web, desktop, mobile and on-chain systems.</p>
      </header>

      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal as="article" className={`project ${i === 0 ? 'project--lead' : ''}`} key={project.name} delay={i * 60}>
            <div className="project__meta">
              <span>{project.date}</span>
              <span>{project.role}</span>
            </div>
            <div className="project__body">
              <h3>{project.title}</h3>
              <p className="project__context">{project.context}</p>
              <p className="project__desc">{project.desc}</p>
              <div className="tag-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                View repository
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="section-note">Tất cả là dự án nhóm. Repository thuộc về teammate, tôi tham gia với vai trò contributor.</p>
    </section>
  );
}
