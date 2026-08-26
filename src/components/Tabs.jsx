export default function Tabs({ tabs, active, onSelect }) {
  const onKeyDown = (event, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const dir = event.key === 'ArrowRight' ? 1 : -1;
    const next = (index + dir + tabs.length) % tabs.length;
    const nextTab = document.getElementById(`tab-${tabs[next].id}`);
    nextTab?.focus();
    nextTab?.click();
  };

  return (
    <nav className="tabs" aria-label="Portfolio sections">
      {tabs.map((tab, index) => (
        <a
          key={tab.id}
          id={`tab-${tab.id}`}
          href={`#${tab.id}`}
          aria-current={active === tab.id ? 'page' : undefined}
          className={`tab ${active === tab.id ? 'is-active' : ''}`}
          onClick={() => onSelect(tab.id)}
          onKeyDown={(event) => onKeyDown(event, index)}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
}
