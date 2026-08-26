---
name: "K1llV Portfolio"
description: "A recruiter-first security audit dossier for verifiable software and cybersecurity work."
colors:
  signal-orange: "#e15b35"
  report-paper: "#f7f6f2"
  raised-paper: "#fbfaf7"
  dossier-ink: "#1a1919"
  muted-ink: "#66635f"
  hairline-rule: "#d2d1d0"
  strong-rule: "#8e8b86"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.4rem, 7.3vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.2rem, 6.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Aptos, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Cascadia Code, SFMono-Regular, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
rounded:
  square: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "48px"
  section: "clamp(96px, 11vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.raised-paper}"
    rounded: "{rounded.square}"
    padding: "0 34px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.dossier-ink}"
    textColor: "{colors.raised-paper}"
    rounded: "{rounded.square}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.dossier-ink}"
    rounded: "{rounded.square}"
    padding: "0 34px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.dossier-ink}"
    textColor: "{colors.raised-paper}"
    rounded: "{rounded.square}"
  navigation-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "70px"
  navigation-tab-active:
    backgroundColor: "rgb(26 25 25 / 0.035)"
    textColor: "{colors.dossier-ink}"
    rounded: "{rounded.square}"
  technology-tag:
    backgroundColor: "transparent"
    textColor: "{colors.dossier-ink}"
    rounded: "{rounded.square}"
    padding: "5px 10px"
  evidence-folder:
    backgroundColor: "rgb(251 250 247 / 0.72)"
    textColor: "{colors.dossier-ink}"
    rounded: "{rounded.square}"
    padding: "clamp(32px, 4vw, 64px)"
---

# Design System: K1llV Portfolio

## Overview

**Creative North Star: "The Security Audit Dossier"**

The portfolio should feel like a carefully assembled evidence file: off-white report stock, condensed black headings, narrow technical annotations, hairline dividers, and a single signal-orange marking system. Its authority comes from legible hierarchy and inspectable work, not from hacker theatrics. The paper texture and folder cuts make the page tactile while leaving the content unmistakably digital and interactive.

The first impression is balanced and recruiter-first. Candidate identity, role, bio, CV, and email share the opening view with the strongest project evidence; later sections continue as ruled records, lists, and evidence groups. The terminal survives only as a subordinate appendix after the complete professional story.

**Key Characteristics:**

- Off-white report stock with subtle grain rather than a sterile white canvas.
- Heavy condensed headings paired with calm humanist body copy and sparse monospace metadata.
- Signal orange used selectively for actions, focus, evidence markers, and active state.
- Square controls, hairline rules, angled tabs, and a stepped folder seam.
- A balanced profile/evidence opening that becomes a strict single column on narrow screens.
- Six exact public anchors; the optional CLI never competes with the primary portfolio narrative.

## Colors

The palette is nearly monochrome and paper-led, with one warm signal color carrying every urgent or interactive cue.

### Primary

- **Signal Orange:** Reserved for the primary action, active navigation rule, keyboard focus, evidence dates and markers, selected text, and restrained section washes. Its scarcity gives it authority.

### Neutral

- **Report Paper:** The full-page ground beneath the fixed fine-grain stock texture.
- **Raised Paper:** A slightly brighter evidence surface and the light text color used against dark ink.
- **Dossier Ink:** Primary text, strong dividers, outlines, and the CLI ground.
- **Muted Ink:** Secondary descriptions and non-active navigation labels.
- **Hairline Rule:** Quiet separators between records, skill groups, and evidence regions.
- **Strong Rule:** Tag outlines and secondary dividers that need more definition without becoming black.

### Named Rules

**The One Signal Rule.** Signal Orange is the only interface accent; do not introduce a competing brand hue outside the subordinate CLI output syntax.

**The Paper Before Panels Rule.** Default to the continuous report-paper canvas and ruled regions; use raised paper or a faint orange wash only when evidence hierarchy requires a distinct surface.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)  
**Body Font:** Aptos (with Segoe UI, system-ui, and sans-serif fallbacks)  
**Label/Mono Font:** Cascadia Code (with SFMono-Regular, Consolas, and monospace fallbacks)

**Character:** Barlow Condensed makes names and evidence headings read like decisive report titles without consuming the full measure. The body face stays neutral and readable, while monospace is confined to dates, folios, status notes, labels, and terminal content.

### Hierarchy

- **Display** (600, `clamp(4.4rem, 7.3vw, 7rem)`, 0.82): Two-line candidate identity and similarly dominant evidence names; uppercase with tight tracking.
- **Headline** (600, `clamp(3.2rem, 6.5vw, 6rem)`, 0.9): Major section titles; uppercase and balanced across short lines.
- **Title** (600, `clamp(2.5rem, 5vw, 4.6rem)`, 0.92): Project, record, and content titles.
- **Body** (400, `1rem`, 1.55): Explanations and evidence descriptions, generally held to about 56–66 characters per line.
- **Label** (400, `0.72rem`, normal tracking): Uppercase dates, statuses, rails, facts, folio notation, and technical metadata.

### Named Rules

**The Condensed Authority Rule.** Use Barlow Condensed for identity, hierarchy, actions, and scannable evidence names; never use it for long explanatory paragraphs.

**The Monospace Annotation Rule.** Monospace is metadata, not atmosphere. Outside the CLI appendix, it appears only in short factual annotations.

## Layout

The page uses a centered fluid measure capped at 1480px, leaving 32px outer gutters on wide screens. The opening dossier is a three-part grid: a narrow annotation rail, a candidate profile column, and a slightly wider evidence folder, separated by fluid 24–56px gaps. Subsequent sections use full-width ruled grids, asymmetric lead records, and generous section rhythm (`clamp(96px, 11vw, 160px)`) rather than floating card stacks.

At 1120px, the measure contracts to a 980px cap and the opening columns tighten. At 820px, the header becomes a two-row index, the annotation rail disappears, and profile precedes evidence in one strict column; project, education, skills, and contact grids also stack. At 560px, the page keeps 12px side gutters, actions become full-width, only the active evidence tab remains visible, rows collapse, and the body scale drops to 15px. The six public anchors remain `whoami`, `projects`, `ctf`, `skills`, `education`, and `contact` at every width.

**The Recruiter Sequence Rule.** Identity and primary actions precede flagship evidence in reading order, followed by projects, public security writing, skills, education, contact, and only then the CLI appendix.

## Elevation & Depth

The system is flat by default and does not use ambient drop shadows. Depth comes from paper tone, 1px rules, inset outlines, clipped silhouettes, subtle translucent washes, and the sticky header's restrained backdrop blur. The evidence folder uses an inset ink outline and stepped top seam; the contact and lead-project regions use a very faint orange wash instead of physical elevation.

### Shadow Vocabulary

- **Inset dossier outline** (`inset 0 0 0 1px var(--ink)`): Draws a precise folder boundary without lifting it off the page.
- **Full-bleed signal wash** (`0 0 0 100vmax rgb(225 91 53 / 0.055)`): Extends the contact tint to the viewport edges while the content stays on-grid.

### Named Rules

**The Flat Evidence Rule.** Surfaces are separated by rules, tone, and clipping; never add generic floating-card shadows.

## Shapes

Controls and content regions are square-cornered. Character comes from geometry rather than radius: folder tabs clip their top corners at 10px, and the flagship evidence body steps around a 42px-wide, 12px-deep seam. Borders are consistently thin and architectural—black for boundaries, gray for internal records, orange only for active or evidentiary marks.

**The Cut, Don't Round Rule.** When a surface needs a distinctive silhouette, use a purposeful tab, notch, or clipped seam; do not soften the dossier with rounded cards or pills.

## Components

### Buttons

- **Shape:** Rectangular, square-cornered, and at least 52px tall, with 34px horizontal padding.
- **Primary:** Signal Orange fill and Raised Paper text with a small northeast arrow; intended for the CV or the single most important action.
- **Hover / Focus:** Both primary and secondary invert to Dossier Ink on hover. The arrow moves 4px northeast; keyboard focus receives a 3px Signal Orange outline with 4px offset; active press moves down 1px. State transitions run for 180ms with standard ease.
- **Secondary:** Transparent report-paper surface with a 1px Dossier Ink border and ink text.

### Chips

- **Style:** Technology labels are compact uppercase Barlow Condensed tags with square corners, transparent fill, and a 1px Strong Rule outline.
- **State:** Tags communicate evidence taxonomy only; they do not impersonate filters or clickable pills.

### Cards / Containers

- **Corner Style:** Square by default; the signature evidence folder uses clipped tabs and a stepped seam instead of radius.
- **Background:** Most records remain on Report Paper. Raised Paper is reserved for the selected evidence folder, while the lead project may receive a faint Signal Orange wash.
- **Shadow Strategy:** Use inset outlines and tonal washes described in Elevation & Depth; no ambient shadow.
- **Border:** One-pixel Dossier Ink for outer boundaries and Hairline Rule for internal divisions.
- **Internal Padding:** Fluid 28–52px for records and 32–64px for the flagship folder, reducing to 22–28px on narrow screens.

### Inputs / Fields

- **Style:** The only shipped field belongs to the CLI appendix: a borderless transparent monospace command line on Dossier Ink.
- **Focus:** A 2px Signal Orange outline with 4px offset and an orange caret keep keyboard operation visible.
- **Error / Disabled:** Command errors use the appendix's muted coral syntax color; there is no disabled field state in the current system.

### Navigation

The wordmark sits left of a six-item uppercase Barlow Condensed index. Tabs are gray at rest; hover and active states gain Dossier Ink text, a near-invisible ink wash, and—only when active—a 3px Signal Orange baseline. On small screens the index scrolls horizontally beneath the wordmark and preserves the exact six labels.

### Evidence Folder

The signature component is a lightly raised-paper project dossier with three clipped tabs, a stepped top-right seam, an orange date rule, an oversized condensed project name, factual role and context, outlined technology tags, and a direct repository link. It must present real evidence only; the inactive tabs are visual indexing cues, not promises of hidden panels.

### Interactive CLI

The CLI is a full-width dark appendix after contact, not the page shell. It uses Dossier Ink, compact monospace output, thin internal dividers, subdued syntax colors, a live command field, and no rounded terminal-window chrome.

## Do's and Don'ts

### Do:

- **Do** keep Signal Orange rare and attach it to primary action, active state, focus, or verifiable evidence.
- **Do** preserve all six public anchors and their recruiter-first reading sequence.
- **Do** express dossier character through paper texture, hairline rules, clipped tabs, folio-like labels, and asymmetric evidence grids.
- **Do** stack profile before flagship evidence below 820px and keep primary actions easy to find and keyboard-operable.
- **Do** keep the CLI after the professional narrative as an optional appendix.

### Don't:

- **Don't** turn the site into a full-screen terminal, neon hacker dashboard, detective board, or faux classified document.
- **Don't** add rounded cards, pill-shaped tags, gradients, generic drop shadows, or extra accent hues to the main dossier.
- **Don't** promote decorative tabs, labels, or metadata into invented claims, classifications, achievements, metrics, or specialties.
- **Don't** rasterize portfolio text, navigation, controls, or project evidence.
- **Don't** hide core profile or evidence content behind interaction.
