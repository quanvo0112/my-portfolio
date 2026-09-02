import { useEffect, useState } from 'react';
import { writeups as fallbackWriteups } from '../data/content';

const FEED_URL = 'https://quanvo0112.github.io/feed.xml';
const STORAGE_KEY = 'k1llv:ctf:writeups:v1';
const TTL = 24 * 60 * 60 * 1000;
const MAX = 4;

function eventFromTitle(title) {
  const match = title.match(/^(.+?)\s+\d{4}/);
  return match ? match[1].trim() : title.trim();
}

function parseFeed(xml) {
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  if (doc.querySelector('parsererror')) return [];

  const entries = [...doc.querySelectorAll('entry')].filter((entry) =>
    [...entry.querySelectorAll('category')].some((cat) =>
      (cat.getAttribute('term') || '').toLowerCase().includes('ctf')
    )
  );

  return entries
    .map((entry) => {
      const title = entry.querySelector('title')?.textContent.trim() ?? '';
      const link = entry.querySelector('link[rel="alternate"]')?.getAttribute('href') || entry.querySelector('link')?.getAttribute('href') || '';
      const date = (entry.querySelector('published')?.textContent || '').slice(0, 10);
      return { title, url: link, date, event: eventFromTitle(title) };
    })
    .filter((w) => w.title && w.url && w.date)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, MAX);
}

function loadCache() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.fetchedAt < TTL && Array.isArray(cached.data)) {
      return cached.data;
    }
  } catch {
    // ignore corrupted cache
  }
  return null;
}

let state = { data: loadCache() ?? fallbackWriteups, live: false };
const listeners = new Set();

function setState(next) {
  state = next;
  listeners.forEach((listener) => listener(state));
}

function refresh() {
  fetch(FEED_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`Feed ${res.status}`);
      return res.text();
    })
    .then(parseFeed)
    .then((data) => {
      if (!data.length) return;
      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ data, fetchedAt: Date.now() })
        );
      } catch {
        // storage full or unavailable; still use in-memory data
      }
      setState({ data, live: true });
    })
    .catch(() => {
      // keep the static fallback on offline or CORS failure
    });
}

let started = false;
function ensureStarted() {
  if (started) return;
  started = true;
  refresh();
}

/** Latest CTF writeups from the Jekyll blog feed, topped by the static list. */
export function useLiveWriteups() {
  const [current, setCurrent] = useState(state);

  useEffect(() => {
    ensureStarted();
    const listener = (next) => setCurrent(next);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return current;
}