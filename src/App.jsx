import { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Ctf from './components/Ctf';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import InteractiveCli from './components/InteractiveCli';

const TABS = [
  { id: 'whoami', label: 'whoami' },
  { id: 'projects', label: 'projects' },
  { id: 'ctf', label: 'ctf.log' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
];

export default function App() {
  const [active, setActive] = useState('whoami');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    TABS.forEach((tab) => {
      const node = document.getElementById(tab.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const restoreLegacyHash = () => {
      const id = window.location.hash.slice(1);
      if (!id.startsWith('section-')) return;
      const target = id.slice(8);
      if (!TABS.some((tab) => tab.id === target)) return;
      window.history.replaceState(null, '', `#${target}`);
      document.getElementById(target)?.scrollIntoView({ block: 'start' });
    };

    restoreLegacyHash();
    window.addEventListener('hashchange', restoreLegacyHash);
    return () => window.removeEventListener('hashchange', restoreLegacyHash);
  }, []);

  const onSelect = (id) => {
    setActive(id);
  };

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#whoami" aria-label="K1llV portfolio home">
          K1llV <span>/ portfolio</span>
        </a>
        <Tabs tabs={TABS} active={active} onSelect={onSelect} />
      </header>

      <main className="site-main">
        <Hero />
        <Projects />
        <Ctf />
        <Skills />
        <Education />
        <Contact />
        <InteractiveCli />
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Võ Hoàng Anh Quân</span>
        <span>React + Vite</span>
      </footer>
    </>
  );
}
