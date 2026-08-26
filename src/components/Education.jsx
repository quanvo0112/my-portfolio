import { education } from '../data/content';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <header className="section-heading">
        <h2 id="education-title">Education</h2>
      </header>
      <Reveal className="education-record">
        <div className="education-record__main">
          <h3>{education.degree}</h3>
          <p>{education.major}</p>
          <p>{education.school}</p>
        </div>
        <dl className="education-record__facts">
          <div><dt>GPA</dt><dd>{education.gpa}</dd></div>
          <div><dt>Graduation</dt><dd>{education.graduation}</dd></div>
        </dl>
        <div className="education-record__languages">
          <h3>Languages</h3>
          <dl>
          {education.languages.map((lang) => (
            <div key={lang.name}><dt>{lang.name}</dt><dd>{lang.level}</dd></div>
          ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
