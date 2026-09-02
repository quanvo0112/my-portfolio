export const profile = {
  name: 'Võ Hoàng Anh Quân',
  handle: 'K1llV',
  role: 'IT Student · Information Security',
  bio: 'Computer Science student majoring in Information Security at the University of Science, VNU-HCM. Passionate about cybersecurity, CTF, and software development - currently working with Python and web projects, and learning Spring Boot and ReactJS.',
  location: 'Ho Chi Minh City, Vietnam',
  blog: 'https://quanvo0112.github.io/',
};

export const contact = {
  email: 'vohoanganhquan.work@gmail.com',
  github: 'https://github.com/quanvo0112',
  linkedin: 'https://www.linkedin.com/in/vohoanganhquan2004/',
  cv: 'https://drive.google.com/file/d/1tS4v9OCKH-VWR9Pq-2EdDBM1tUj4Nkjf/view?usp=sharing',
};

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  major: 'Information Security',
  school: 'University of Science, VNU-HCM',
  gpa: '3.38 / 4.0',
  graduation: '09/2026 (expected)',
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'IELTS 5.5 Academic' },
  ],
};

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript'],
  },
  {
    group: 'Frameworks',
    items: ['React', 'Spring'],
  },
  {
    group: 'Data',
    items: ['MySQL'],
  },
  {
    group: 'Tooling',
    items: ['Git', 'Linux', 'Docker'],
  },
];

// `perm` / `size` are cosmetic. They make the `ls -la` listing read like a
// real directory dump instead of a table with invented columns.
export const projects = [
  {
    perm: '-rwxr-xr-x',
    name: 'yoca',
    title: 'YOCA - Yet another On-chain Analysis',
    role: 'Full-stack Developer',
    context: 'Graduation project - 6-member team',
    size: '42.8M',
    date: '09/2025-15/08/2026',
    desc: 'An on-chain analysis platform on Solana: market discovery, token and wallet analysis, wash-trading detection, alert tracking, and AI-assisted data explanations.',
    stack: [
      'React 19',
      'Vite 7',
      'TypeScript',
      'Carbon Design System',
      'Hono 4',
      'Node.js',
      'PostgreSQL',
      'Drizzle ORM',
      'Redis',
      'Solana',
      'Google Gemini',
      'Stripe',
      'Prometheus',
      'Grafana',
      'Docker',
    ],
    repo: 'https://github.com/YocaHCMUS/Yoca',
  },
  {
    perm: '-rwxr-xr-x',
    name: 'capybara-vibe-pos',
    title: 'Cafe & Restaurant POS System',
    role: 'Fullstack Developer',
    context: 'Academic group project - "Capybara Vibe"',
    size: '6.1K',
    date: '11/2025 - 01/2026',
    desc: 'A POS system for small cafés and restaurants. Built with MVVM + Clean Architecture on WinUI 3 / .NET 8, PostgreSQL running through Docker, EF Core Migrations, and unit tests.',
    stack: ['C#', 'WinUI3', '.NET 8', 'PostgreSQL', 'Clean Architecture'],
    repo: 'https://github.com/zenniskayy2k4/WP-Capybara-Vibe',
  },
  {
    perm: '-rwxr-xr-x',
    name: 'drawing-application',
    title: 'Drawing Application',
    role: 'Backend Developer & Tester',
    context: 'Academic group project',
    size: '3.5K',
    date: '2026/01',
    desc: 'A cross-platform drawing tool (Windows, Android, iOS, macOS, Linux, Web) built with Flutter/Dart: vector shapes, freehand drawing, a custom binary format for saving/loading canvases, and PNG/JPEG export.',
    stack: ['Flutter', 'Dart', 'Cross-platform'],
    repo: 'https://github.com/zenniskayy2k4/WP-Paint-App',
  },
  {
    perm: '-rwxr-xr-x',
    name: 'class-scheduler',
    title: 'Class Scheduler',
    role: 'Tester & Data Engineer',
    context: 'Personal project with a friend',
    size: '2.8K',
    date: '2025',
    desc: 'A desktop course-scheduling app written in C/Raylib that reads course data from tab-delimited files. Includes a self-written Chrome extension that crawls the "List of Open Class" page on the HCMUS student portal.',
    stack: ['C', 'Raylib', 'Chrome Extension'],
    repo: 'https://github.com/hongphuchcmus/SchedulerRaylibHCMUS',
  },
];

// These live on a separate Jekyll blog repo. Absolute URLs only.
export const writeups = [
  {
    date: '2026-08-24',
    event: 'BrunnerCTF',
    title: 'BrunnerCTF 2026 - Global',
    url: 'https://quanvo0112.github.io/posts/brunnerctf2026-writeup/',
  },
  {
    date: '2026-06-15',
    event: 'HCMUS-CTF',
    title: 'HCMUS-CTF 2026 Qualification',
    url: 'https://quanvo0112.github.io/posts/hcmusctf-writeup/',
  },
  {
    date: '2026-05-20',
    event: 'CyberGame',
    title: 'CyberGame 2026',
    url: 'https://quanvo0112.github.io/posts/cybergamectf-writeup/',
  },
  {
    date: '2026-04-13',
    event: 'DawgCTF',
    title: 'DawgCTF 2026',
    url: 'https://quanvo0112.github.io/posts/dawgctf-writeup/',
  },
];

export const bootLines = [
  { level: 'ok', text: 'kernel: loading portfolio.img ... done' },
  { level: 'ok', text: 'mount /dev/quan on / type ext4 (rw,relatime)' },
  { level: 'ok', text: 'starting profile service [whoami]' },
  { level: 'warn', text: 'coffee reserves running low' },
  { level: 'ok', text: 'indexing 4 projects, 4 ctf writeups' },
  { level: 'ok', text: 'net: link up - github, linkedin reachable' },
  { level: 'ok', text: 'session ready. welcome, guest.' },
];
