import { useCallback, useEffect, useState } from 'react';
import BootSequence from './components/BootSequence';
import TitleBar from './components/TitleBar';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Ctf from './components/Ctf';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import InteractiveCli from './components/InteractiveCli';

const TABS = [
  { id: 'whoami', label: '~/whoami' },
  { id: 'projects', label: '~/projects' },
  { id: 'ctf', label: '~/ctf.log' },
  { id: 'skills', label: '~/skills' },
  { id: 'education', label: '~/education' },
  { id: 'contact', label: '~/contact' },
];

export default function App() {
  const [booted, setBooted] = useState(false);
  const [active, setActive] = useState('whoami');

  const onBootDone = useCallback(() => setBooted(true), []);

  // Highlight the tab whose section is closest to the top of the viewport.
  useEffect(() => {
    if (!booted || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id.replace('section-', ''));
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    TABS.forEach((tab) => {
      const node = document.getElementById(`section-${tab.id}`);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [booted]);

  const onSelect = (id) => {
    setActive(id);
    document.getElementById(`section-${id}`)?.scrollIntoView({ block: 'start' });
  };

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-scanlines" aria-hidden="true" />
      <div className="bg-sweep" aria-hidden="true" />

      {!booted && <BootSequence onDone={onBootDone} />}

      <main className="shell">
        <div className="terminal">
          <TitleBar path={TABS.find((tab) => tab.id === active)?.label ?? '~'} />
          <Tabs tabs={TABS} active={active} onSelect={onSelect} />

          <div className="termbody">
            <Hero booted={booted} />
            <Projects />
            <Ctf />
            <Skills />
            <Education />
            <Contact />
          </div>
        </div>

        <InteractiveCli />

        <p className="footer">
          <b>© {new Date().getFullYear()} Vo Hoang Anh Quan · built with React + Vite</b>
        </p>
      </main>
    </>
  );
}
