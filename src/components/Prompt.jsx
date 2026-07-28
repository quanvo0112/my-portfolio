export default function Prompt({ path = '~', command, cursor = false, typed }) {
  return (
    <p className="prompt">
      <span>
        <span className="prompt__user">guest@k1llv</span>
        <span className="prompt__sep">:</span>
        <span className="prompt__path">{path}</span>
        <span className="prompt__sym">$</span>
      </span>
      <span className="prompt__cmd">
        {typed ?? command}
        {cursor && <span className="cursor" aria-hidden="true" />}
      </span>
    </p>
  );
}
