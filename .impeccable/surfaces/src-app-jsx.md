---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/styles/index.css","src/data/content.js"]
---

# Portfolio home

## Scope and mode

Single-page portfolio at `src/App.jsx`. Visitor mode: Experience with recruiter-first scanability.

## Audience, job and action

Recruiters and hiring managers evaluating Võ Hoàng Anh Quân for Information Security, cybersecurity or software development internships and junior roles. They must understand identity, focus and strongest evidence quickly, then open the CV, inspect a repository or make contact.

## Content and constraints

Preserve all six existing sections and anchor IDs: `whoami`, `projects`, `ctf`, `skills`, `education`, `contact`. Preserve real content and links from `src/data/content.js`; do not invent achievements, impact, employers, metrics or security specialties. Keep the interactive CLI as a secondary easter egg.

## Chosen direction

Security Audit Dossier, Balanced Split composition. Approved comp: `.impeccable/mocks/decision/security-audit-dossier.png`.

The memorable moment is a first viewport split evenly between an executive candidate summary and a flagship YOCA evidence folder. Recruiter actions remain visible without scrolling. Audit language appears through tabs, folio notation, hairline rules and evidence grouping, not detective or hacker clichés.

## Implementation inventory

| Ingredient | Comp commitment | Medium |
| --- | --- | --- |
| Page ground | Sampled `#f7f6f2`, fine paper grain across the full page | CSS color plus fixed low-opacity noise raster only if available; solid fallback |
| Primary ink | Sampled `#1a1919` | CSS token |
| Accent | Sampled `#e15b35`, reserved for primary action and evidence markers | CSS token |
| Rules | Sampled `#d2d1d0`, 1px | CSS borders |
| Display type | Very condensed, heavy sans; name about 3.5 times body cap height | Self-hosted or installed condensed sans; fallback `Arial Narrow`, sans-serif |
| Body type | Clean humanist sans, readable at 16px | System sans stack |
| Header | One line, under 72px, wordmark left and six section links right | Semantic nav and buttons |
| Candidate summary | Large two-line name, role, short real bio, CV and Email actions | Semantic HTML and CSS grid |
| Flagship evidence | Folder outline with quiet tabs, YOCA title, real role/context/stack and repository link | Semantic HTML and CSS; no fake screenshot |
| Primary action | Solid orange rectangular control with directional feedback | Anchor plus CSS |
| Continuation | Next section edge visible below first viewport | Responsive layout and spacing |
| Interaction | Short document-reveal cascade and tab/row feedback; content visible by default | CSS transitions plus existing IntersectionObserver; reduced-motion fallback |

## Responsive rules

At widths below 768px, collapse the balanced split to a strict single column: candidate summary first, flagship evidence second. Navigation becomes compact horizontal scroll or an accessible menu without changing labels. Typography scales down without exceeding two lines for the name. Folder tabs become a simple inline index; no horizontal overflow.

## Must not be literalized

Do not ship the comp's invented `Achievements`, `Impact`, `Application Security`, public classification or document-reference claims. Do not rasterize text or controls. Do not turn every later section into a folder or card; the dossier grammar should organize evidence, not costume every block.
