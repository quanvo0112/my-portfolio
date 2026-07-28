import { useTypewriter } from '../hooks/useTypewriter';
import { profile, contact } from '../data/content';
import Prompt from './Prompt';
import Reveal from './Reveal';

export default function Hero({ booted }) {
  const [typed, done] = useTypewriter('whoami --verbose', { start: booted, speed: 52, delay: 220 });

  return (
    <section className="section" id="section-whoami" aria-labelledby="tab-whoami">
      <Prompt path="~" typed={typed} cursor={!done} />

      <Reveal delay={0}>
        <h1 className="hero__name">
          {profile.name} <span className="hero__handle">({profile.handle})</span>
        </h1>
      </Reveal>

      <Reveal delay={60}>
        <p className="hero__role">{profile.role}</p>
      </Reveal>

      <Reveal delay={120}>
        <p className="hero__bio">{profile.bio}</p>
      </Reveal>

      <Reveal delay={180} className="hero__meta">
        <span className="chip">📍 {profile.location}</span>
        <span className="chip">🎓 GPA 3.38 / 4.0</span>
        <span className="chip">🚩 CTF player</span>
        <span className="chip">🔓 Open to internships</span>
      </Reveal>

      <Reveal delay={240} className="hero__actions">
        <a className="btn btn--primary" href={contact.cv} target="_blank" rel="noreferrer noopener">
          ./download_cv.sh
        </a>
        <a className="btn" href={`mailto:${contact.email}`}>
          mail -s "hi"
        </a>
        <a className="btn" href={contact.github} target="_blank" rel="noreferrer noopener">
          git remote -v
        </a>
      </Reveal>
    </section>
  );
}
