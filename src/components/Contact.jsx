import { contact } from '../data/content';
import Reveal from './Reveal';

const rows = [
  { host: 'Email', label: contact.email, href: `mailto:${contact.email}` },
  { host: 'GitHub', label: 'github.com/quanvo0112', href: contact.github },
  { host: 'LinkedIn', label: 'in/vohoanganhquan2004', href: contact.linkedin },
  { host: 'Resume', label: 'View CV on Google Drive', href: contact.cv },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <header className="contact-heading">
        <h2 id="contact-title">Let&apos;s talk about the work.</h2>
        <p>I am open to internship opportunities where security thinking and software development meet.</p>
      </header>
      <div className="contact-list">
          {rows.map((row, i) => (
            <Reveal className="contact-row" key={row.host} delay={i * 70}>
              <span>{row.host}</span>
              <a href={row.href} target="_blank" rel="noreferrer noopener">
                {row.label}
              </a>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
