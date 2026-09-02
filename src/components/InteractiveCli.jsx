import { useEffect, useRef, useState } from 'react';
import { profile, contact, education, projects, skills } from '../data/content';
import { useLiveWriteups } from '../hooks/useLiveWriteups';

const WELCOME = [
  { kind: 'accent', text: "k1llv-shell v1.0.0 - type `help` for the command list." },
];

function runCommand(raw, writeups) {
  const input = raw.trim();
  const cmd = input.toLowerCase();
  const head = cmd.split(/\s+/)[0];

  switch (true) {
    case cmd === 'help':
      return [
        { kind: 'accent', text: 'available commands:' },
        { kind: 'out', text: '  whoami     who this is' },
        { kind: 'out', text: '  ls         list projects' },
        { kind: 'out', text: '  cat ctf    ctf writeups' },
        { kind: 'out', text: '  skills     tech stack' },
        { kind: 'out', text: '  edu        education' },
        { kind: 'out', text: '  contact    email / github / linkedin' },
        { kind: 'out', text: '  resume     open CV in a new tab' },
        { kind: 'out', text: '  pwd date   misc' },
        { kind: 'out', text: '  clear      clear the screen' },
        { kind: 'magenta', text: '  (a few easter eggs - try guessing)' },
      ];

    case cmd === 'whoami':
      return [
        { kind: 'ok', text: `${profile.name} (${profile.handle})` },
        { kind: 'out', text: profile.role },
        { kind: 'out', text: profile.bio },
      ];

    case head === 'ls':
      return [
        { kind: 'out', text: `total ${projects.length}` },
        ...projects.map((p) => ({
          kind: 'accent',
          text: `${p.perm}  ${p.size}  ${p.date}  ${p.name}/  - ${p.role}`,
        })),
        { kind: 'out', text: 'details + repo links in ~/projects section above.' },
      ];

    case cmd === 'cat ctf' || cmd === 'cat ctf/writeups.log' || cmd === 'ctf':
      return writeups.map((w) => ({
        kind: 'magenta',
        text: `${w.date}  [SOLVED]  ${w.event} - ${w.url}`,
      }));

    case cmd === 'skills' || cmd === 'grep skills':
      return skills.map((g) => ({
        kind: 'accent',
        text: `${g.group.padEnd(12)} ${g.items.join(', ')}`,
      }));

    case cmd === 'edu' || cmd === 'education' || cmd === 'cat education.md':
      return [
        { kind: 'accent', text: `${education.degree} - ${education.major}` },
        { kind: 'out', text: education.school },
        { kind: 'ok', text: `GPA ${education.gpa} · graduation ${education.graduation}` },
        {
          kind: 'out',
          text: education.languages.map((l) => `${l.name}: ${l.level}`).join('  |  '),
        },
      ];

    case cmd === 'contact':
      return [
        { kind: 'ok', text: `email     ${contact.email}` },
        { kind: 'ok', text: `github    ${contact.github}` },
        { kind: 'ok', text: `linkedin  ${contact.linkedin}` },
      ];

    case cmd === 'resume' || cmd === 'cv':
      window.open(contact.cv, '_blank', 'noopener,noreferrer');
      return [{ kind: 'ok', text: 'opening CV in a new tab...' }];

    case cmd === 'blog':
      window.open(profile.blog, '_blank', 'noopener,noreferrer');
      return [{ kind: 'ok', text: `opening ${profile.blog} ...` }];

    case cmd === 'pwd':
      return [{ kind: 'out', text: '/home/quan/portfolio' }];

    case cmd === 'date':
      return [{ kind: 'out', text: new Date().toString() }];

    case head === 'sudo':
      return [
        { kind: 'err', text: `guest is not in the sudoers file. This incident will be reported.` },
        { kind: 'out', text: "(don't worry, no one will know)" },
      ];

    case cmd === 'hack' || cmd.startsWith('hack '):
      return [
        { kind: 'accent', text: 'ACCESS GRANTED - enhancing GUI interface using visual basic...' },
        { kind: 'magenta', text: '[||||||||||||||||||||] 100%' },
        { kind: 'err', text: 'just kidding. hack the box, not other people.' },
      ];

    case cmd === 'rm -rf /' || cmd === 'rm -rf /*':
      return [{ kind: 'err', text: 'nice try :) permission denied' }];

    case cmd === 'exit' || cmd === 'logout':
      return [{ kind: 'out', text: 'you cannot escape, this is a web page.' }];

    case cmd === '':
      return [];

    default:
      return [{ kind: 'err', text: `zsh: command not found: ${input}` }];
  }
}

export default function InteractiveCli() {
  const { data: writeups } = useLiveWriteups();
  const [lines, setLines] = useState(WELCOME);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [cursorIdx, setCursorIdx] = useState(-1);
  const outRef = useRef(null);

  useEffect(() => {
    const node = outRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [lines]);

  const submit = (event) => {
    event.preventDefault();
    const input = value;

    if (input.trim().toLowerCase() === 'clear') {
      setLines([]);
      setValue('');
      setHistory((h) => [input, ...h]);
      setCursorIdx(-1);
      return;
    }

    setLines((prev) => [...prev, { kind: 'cmd', text: `guest@k1llv:~$ ${input}` }, ...runCommand(input, writeups)]);
    if (input.trim()) setHistory((h) => [input, ...h]);
    setValue('');
    setCursorIdx(-1);
  };

  const onKeyDown = (event) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    if (history.length === 0) return;
    event.preventDefault();

    const next = event.key === 'ArrowUp'
      ? Math.min(cursorIdx + 1, history.length - 1)
      : cursorIdx - 1;

    setCursorIdx(next);
    setValue(next < 0 ? '' : history[next]);
  };

  return (
    <section className="cli" aria-labelledby="cli-title">
      <div className="cli__head">
        <div>
          <h2 id="cli-title">Interactive shell</h2>
          <span className="cli__label">Optional appendix</span>
        </div>
        <span className="cli__hint">
          try <kbd>help</kbd> / history with arrow keys
        </span>
      </div>

      <div className="cli__out" ref={outRef} role="log" aria-live="polite">
        {lines.map((line, i) => (
          <p className={`cli__line cli__line--${line.kind}`} key={i}>
            {line.text}
          </p>
        ))}
      </div>

      <form className="cli__form" onSubmit={submit}>
        <span className="cli__ps1" aria-hidden="true">
          guest@k1llv:~$
        </span>
        <input
          className="cli__input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="type a command..."
          aria-label="Terminal command input"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </section>
  );
}
