import { profile, contact, projects } from '../data/content';

export default function Hero() {
  const flagship = projects[0];

  return (
    <section className="hero" id="whoami" aria-labelledby="hero-title">
      <aside className="hero__rail" aria-label="Profile summary">
        <span>Profile / 2026</span>
        <span>Focus / Information Security</span>
        <span>Status / Open to internships</span>
      </aside>

      <div className="hero__profile">
        <h1 id="hero-title" className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={contact.cv} target="_blank" rel="noreferrer noopener">
            View CV <span className="btn__arrow" aria-hidden="true" />
          </a>
          <a className="btn" href={`mailto:${contact.email}`}>Email me</a>
        </div>
      </div>

      <article className="evidence-folder" aria-labelledby="flagship-title">
        <div className="evidence-folder__body">
          <div className="evidence-folder__topline">
            <span>{flagship.date}</span>
          </div>
          <h2 id="flagship-title">{flagship.title}</h2>
          <p className="evidence-folder__role">Flagship project / {flagship.role}</p>
          <p className="evidence-folder__context">{flagship.context}</p>
          <p className="evidence-folder__desc">{flagship.desc}</p>
          <div className="tag-list" aria-label="Flagship technology stack">
            {flagship.stack.slice(0, 7).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <a className="text-link" href={flagship.repo} target="_blank" rel="noreferrer noopener">
            View repository
          </a>
        </div>
      </article>
    </section>
  );
}