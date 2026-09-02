import { profile } from '../data/content';
import { useLiveWriteups } from '../hooks/useLiveWriteups';
import Reveal from './Reveal';

export default function Ctf() {
  const { data: writeups } = useLiveWriteups();
  return (
    <section className="section ctf-section" id="ctf" aria-labelledby="ctf-title">
      <header className="section-heading">
        <h2 id="ctf-title">CTF writeups</h2>
        <p>Public notes from security challenges, hosted on my technical blog.</p>
      </header>
      <div className="writeup-list">
        {writeups.map((entry, i) => (
          <Reveal as="article" className="writeup" key={entry.url} delay={i * 80}>
            <time dateTime={entry.date}>{entry.date}</time>
            <div>
              <span>{entry.event}</span>
              <h3>{entry.title}</h3>
            </div>
            <a className="text-link" href={entry.url} target="_blank" rel="noreferrer noopener">
              Read writeup
            </a>
          </Reveal>
        ))}
      </div>
      <a className="text-link section-link" href={profile.blog} target="_blank" rel="noreferrer noopener">Visit technical blog</a>
    </section>
  );
}
