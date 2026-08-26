import { skills } from '../data/content';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <header className="section-heading">
        <h2 id="skills-title">Technical stack</h2>
        <p>Tools I currently use across software delivery and security-focused learning.</p>
      </header>
      <div className="skill-groups">
        {skills.map((group, i) => (
          <Reveal as="article" className="skill-group" key={group.group} delay={i * 70}>
            <h3>{group.group}</h3>
            <div className="skill-group__items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="section-note">Currently learning more about Spring Boot and ReactJS.</p>
    </section>
  );
}
