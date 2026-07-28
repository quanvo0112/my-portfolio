import { writeups, profile } from '../data/content';
import Prompt from './Prompt';
import Reveal from './Reveal';

export default function Ctf() {
  return (
    <section className="section" id="section-ctf" aria-labelledby="tab-ctf">
      <Prompt path="~" command="cat ctf/writeups.log" />

      <div className="log">
        {writeups.map((entry, i) => (
          <Reveal className="log__row" key={entry.url} delay={i * 80}>
            <span className="log__date">{entry.date}</span>
            <span className="log__level">[SOLVED]</span>
            <span className="log__event">{entry.event}</span>
            <a className="log__title" href={entry.url} target="_blank" rel="noreferrer noopener">
              {entry.title} ↗
            </a>
          </Reveal>
        ))}
      </div>

      <p className="note">
        # writeups host trên blog:{' '}
        <a href={profile.blog} target="_blank" rel="noreferrer noopener">
          {profile.blog}
        </a>
      </p>
    </section>
  );
}
