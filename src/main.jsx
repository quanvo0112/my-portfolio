import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

(function generateFavicons() {
  const base = import.meta.env.BASE_URL;
  if (typeof document === 'undefined') return;
  const svgUrl = `${base}favicon.svg`;
  fetch(svgUrl)
    .then((res) => {
      if (!res.ok) return res.text().then(() => null);
      return res.text();
    })
    .then((svg) => {
      if (!svg) return;
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        [16, 32, 180].forEach((size) => {
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          canvas.getContext('2d').drawImage(img, 0, 0, size, size);
          const href = canvas.toDataURL('image/png');
          const rel = size === 180 ? 'apple-touch-icon' : 'icon';
          const type = size === 180 ? undefined : 'image/png';
          const existing = document.querySelector(`link[rel="${rel}"][sizes="${size}x${size}"]`);
          if (existing) {
            existing.setAttribute('href', href);
          } else {
            const link = document.createElement('link');
            link.rel = rel;
            link.sizes = `${size}x${size}`;
            if (type) link.type = type;
            link.href = href;
            document.head.appendChild(link);
          }
        });
        URL.revokeObjectURL(url);
      };
      img.src = url;
    })
    .catch(() => {});
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
