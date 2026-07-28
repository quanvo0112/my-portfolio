import { contact } from '../data/content';
import Prompt from './Prompt';
import Reveal from './Reveal';

const rows = [
  { host: 'email', label: contact.email, href: `mailto:${contact.email}`, time: '0.412 ms' },
  { host: 'github', label: 'github.com/quanvo0112', href: contact.github, time: '0.517 ms' },
  { host: 'linkedin', label: 'in/vohoanganhquan2004', href: contact.linkedin, time: '0.688 ms' },
  { host: 'resume', label: 'CV — Google Drive', href: contact.cv, time: '0.734 ms' },
];

export default function Contact() {
  return (
    <section className="section" id="section-contact" aria-labelledby="tab-contact">
      <Prompt path="~" command="ping -c 4 quan.contact" />

      <div className="ping">
        <p className="ping__head">PING quan.contact (127.0.0.1): 56 data bytes</p>

        <div className="ping__rows">
          {rows.map((row, i) => (
            <Reveal className="ping__row" key={row.host} delay={i * 70}>
              <span className="ping__bytes">64 bytes from</span>
              <span className="ping__host">{row.host}:</span>
              <a href={row.href} target="_blank" rel="noreferrer noopener">
                {row.label}
              </a>
              <span className="ping__time">time={row.time}</span>
            </Reveal>
          ))}
        </div>

        <p className="ping__stats">
          --- quan.contact ping statistics ---
          <br />4 packets transmitted, <b>4 received</b>, 0% packet loss
          <br />
          rtt min/avg/max = 0.412/0.587/0.734 ms
        </p>
      </div>
    </section>
  );
}
