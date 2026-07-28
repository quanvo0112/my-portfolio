import { skills } from '../data/content';
import Prompt from './Prompt';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section className="section" id="section-skills" aria-labelledby="tab-skills">
      <Prompt path="~" command='grep -r "skills" ./stack --color=always' />

      <div className="grep">
        {skills.map((group, i) => (
          <Reveal className="grep__group" key={group.group} delay={i * 70}>
            <p className="grep__label">
              ./stack/<b>{group.group.toLowerCase()}</b>.conf: {group.items.length} match
              {group.items.length > 1 ? 'es' : ''}
            </p>
            <div className="grep__items">
              {group.items.map((item) => (
                <span className="skill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <p className="note"># đang học thêm: Spring Boot, ReactJS.</p>
    </section>
  );
}
