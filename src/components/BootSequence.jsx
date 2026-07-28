import { useEffect, useState } from 'react';
import { bootLines } from '../data/content';

const STEP_MS = 190;

export default function BootSequence({ onDone }) {
  const [shown, setShown] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (shown >= bootLines.length) {
      const t = setTimeout(() => setHiding(true), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((n) => n + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [shown]);

  useEffect(() => {
    if (!hiding) return;
    const t = setTimeout(onDone, 520);
    return () => clearTimeout(t);
  }, [hiding, onDone]);

  const skip = () => setHiding(true);

  const pct = Math.round((Math.min(shown, bootLines.length) / bootLines.length) * 100);

  return (
    <div className={`boot ${hiding ? 'is-done' : ''}`} role="status" aria-live="polite">
      <div className="boot__inner">
        {bootLines.slice(0, shown).map((line, i) => (
          <p className="boot__line" key={i}>
            <span className={`boot__tag ${line.level === 'warn' ? 'boot__tag--warn' : ''}`}>
              {line.level === 'warn' ? '[WARN]' : '[ OK ]'}
            </span>{' '}
            {line.text}
          </p>
        ))}

        <div className="boot__bar" aria-hidden="true">
          <i style={{ width: `${pct}%` }} />
        </div>

        <button type="button" className="boot__skip" onClick={skip}>
          press to skip
        </button>
      </div>
    </div>
  );
}
