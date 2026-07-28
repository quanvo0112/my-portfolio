export default function TitleBar({ path }) {
  return (
    <div className="titlebar">
      <div className="dots" aria-hidden="true">
        <span className="dot dot--red" />
        <span className="dot dot--amber" />
        <span className="dot dot--green" />
      </div>

      <div className="titlebar__path">
        guest@k1llv — <b>{path}</b> — zsh
      </div>

      <div className="titlebar__status" aria-hidden="true">
        <i />
        online
      </div>
    </div>
  );
}
