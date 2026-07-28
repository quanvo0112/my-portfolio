import { useEffect, useState } from 'react';

/** Types `text` out one character at a time once `start` flips true. */
export function useTypewriter(text, { speed = 55, start = true, delay = 0 } = {}) {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    setOut('');
    setDone(false);

    let i = 0;
    let tick;
    const kickoff = setTimeout(() => {
      tick = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(tick);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(kickoff);
      clearInterval(tick);
    };
  }, [text, speed, start, delay]);

  return [out, done];
}
