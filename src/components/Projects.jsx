import { projects } from '../data/content';
import Prompt from './Prompt';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section className="section" id="section-projects" aria-labelledby="tab-projects">
      <Prompt path="~" command="ls -la ./projects" />

      <p className="ls__total">total {projects.length} · drwxr-xr-x quan staff</p>

      <div className="ls">
        {projects.map((project, i) => (
          <Reveal className="ls__row" key={project.name} delay={i * 70}>
            <span className="ls__cols">
              <span className="ls__perm">{project.perm}</span>
              <span className="ls__size">{project.size}</span>
              <span className="ls__date">{project.date}</span>
            </span>

            <span>
              <span className="ls__name">{project.name}/</span>
              <span className="ls__meta">
                <b className="ls__role">{project.role}</b> — {project.title} · {project.context}
              </span>

              <span className="ls__desc">{project.desc}</span>

              <span className="ls__stack">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </span>

              <a
                className="ls__link"
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                → repo (team)
              </a>
            </span>
          </Reveal>
        ))}
      </div>

      <p className="note"># tất cả đều là dự án nhóm — repo thuộc về teammate, tôi là contributor.</p>
    </section>
  );
}
