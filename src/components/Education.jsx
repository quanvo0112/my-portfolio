import { education } from '../data/content';
import Prompt from './Prompt';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section className="section" id="section-education" aria-labelledby="tab-education">
      <Prompt path="~" command="cat education.md" />

      <Reveal className="md">
        <h2 className="md__h">Education</h2>
        <ul className="md__list">
          <li>
            <span className="md__key">degree:</span>{' '}
            <span className="md__val">{education.degree}</span>
          </li>
          <li>
            <span className="md__key">major:</span> <span className="md__val">{education.major}</span>
          </li>
          <li>
            <span className="md__key">school:</span>{' '}
            <span className="md__val">{education.school}</span>
          </li>
          <li>
            <span className="md__key">gpa:</span>{' '}
            <span className="md__val md__val--hl">{education.gpa}</span>
          </li>
          <li>
            <span className="md__key">graduation:</span>{' '}
            <span className="md__val">{education.graduation}</span>
          </li>
        </ul>

        <h3 className="md__sub">Languages</h3>
        <ul className="md__list">
          {education.languages.map((lang) => (
            <li key={lang.name}>
              <span className="md__key">{lang.name}:</span>{' '}
              <span className="md__val">{lang.level}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
