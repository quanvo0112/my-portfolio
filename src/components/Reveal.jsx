import { useReveal } from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isIn] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isIn ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
