import { profile } from '../data/content';

export default function Tabs({ tabs, active, onSelect }) {
  const onKeyDown = (event, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const dir = event.key === 'ArrowRight' ? 1 : -1;
    const next = (index + dir + tabs.length) % tabs.length;
    onSelect(tabs[next].id);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  };

  return (
    <nav className="tabs" role="tablist" aria-label="Sections">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          role="tab"
          type="button"
          aria-selected={active === tab.id}
          aria-controls={`section-${tab.id}`}
          className={`tab ${active === tab.id ? 'is-active' : ''}`}
          onClick={() => onSelect(tab.id)}
          onKeyDown={(event) => onKeyDown(event, index)}
        >
          {tab.label}
        </button>
      ))}

      <a
        className="tab tab--external"
        href={profile.blog}
        target="_blank"
        rel="noreferrer noopener"
        title="CTF writeups & blog (opens in a new tab)"
      >
        ~/blog ↗
      </a>
    </nav>
  );
}
