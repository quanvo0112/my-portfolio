export const profile = {
  name: 'Võ Hoàng Anh Quân',
  handle: 'K1llV',
  role: 'IT Student · Information Security',
  bio: 'Sinh viên Công nghệ thông tin, chuyên ngành An toàn thông tin tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Đam mê cybersecurity, CTF và phát triển phần mềm — hiện làm việc với Python, các dự án web, và đang học Spring Boot, ReactJS.',
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
  degree: 'Cử nhân Công nghệ thông tin',
  major: 'An toàn thông tin (Information Security)',
  school: 'Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM',
  gpa: '3.38 / 4.0',
  graduation: '09/2026 (dự kiến)',
  languages: [
    { name: 'Tiếng Việt', level: 'Bản ngữ' },
    { name: 'Tiếng Anh', level: 'IELTS 5.5 Academic' },
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

// `perm` / `size` are cosmetic — they make the `ls -la` listing read like a
// real directory dump instead of a table with invented columns.
export const projects = [
  {
    perm: '-rwxr-xr-x',
    name: 'yoca',
    title: 'YOCA — Yet another On-chain Analysis',
    role: 'Full-stack Developer',
    context: 'Dự án tốt nghiệp — Nhóm 6 thành viên',
    size: '42.8M',
    date: '09/2025–15/08/2026',
    desc: 'Nền tảng phân tích on-chain trên Solana: khám phá thị trường, phân tích token và ví, phát hiện wash trading, theo dõi cảnh báo và hỗ trợ giải thích dữ liệu bằng AI.',
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
    name: 'class-scheduler',
    title: 'Class Scheduler',
    role: 'Tester & Data Engineer',
    context: 'Dự án cá nhân cùng một người bạn',
    size: '2.8K',
    date: '2025',
    desc: 'Ứng dụng desktop xếp lịch học viết bằng C/Raylib, đọc dữ liệu môn học từ file tab-delimited. Kèm Chrome extension tự viết để crawl trang "List of Open Class" trên cổng sinh viên HCMUS.',
    stack: ['C', 'Raylib', 'Chrome Extension'],
    repo: 'https://github.com/hongphuchcmus/SchedulerRaylibHCMUS',
  },
  {
    perm: '-rwxr-xr-x',
    name: 'capybara-vibe-pos',
    title: 'Cafe & Restaurant POS System',
    role: 'Fullstack Developer',
    context: 'Dự án nhóm học thuật — "Capybara Vibe"',
    size: '6.1K',
    date: '2025',
    desc: 'Hệ thống POS cho quán café / nhà hàng nhỏ. Kiến trúc MVVM + Clean Architecture trên WinUI 3 / .NET 8, PostgreSQL chạy qua Docker, EF Core Migrations, có unit test.',
    stack: ['C#', 'WinUI3', '.NET 8', 'PostgreSQL', 'Clean Architecture'],
    repo: 'https://github.com/zenniskayy2k4/WP-Capybara-Vibe',
  },
  {
    perm: '-rwxr-xr-x',
    name: 'drawing-application',
    title: 'Drawing Application',
    role: 'Backend Developer & Tester',
    context: 'Dự án nhóm học thuật',
    size: '3.5K',
    date: '2025',
    desc: 'Công cụ vẽ đa nền tảng (Windows, Android, iOS, macOS, Linux, Web) bằng Flutter/Dart: vẽ hình khối, vẽ tự do, định dạng file nhị phân riêng để lưu/tải canvas, xuất PNG/JPEG.',
    stack: ['Flutter', 'Dart', 'Cross-platform'],
    repo: 'https://github.com/zenniskayy2k4/WP-Paint-App',
  },
];

// These live on a separate Jekyll blog repo — absolute URLs only.
export const writeups = [
  {
    date: '2026-04-13',
    event: 'DawgCTF',
    title: 'DawgCTF Writeup',
    url: 'https://quanvo0112.github.io/posts/dawgctf-writeup/',
  },
  {
    date: '2026-05-15',
    event: 'CyberGameCTF',
    title: 'CyberGameCTF Writeup',
    url: 'https://quanvo0112.github.io/posts/cybergamectf-writeup/',
  },
];

export const bootLines = [
  { level: 'ok', text: 'kernel: loading portfolio.img ... done' },
  { level: 'ok', text: 'mount /dev/quan on / type ext4 (rw,relatime)' },
  { level: 'ok', text: 'starting profile service [whoami]' },
  { level: 'warn', text: 'coffee reserves running low' },
  { level: 'ok', text: 'indexing 4 projects, 2 ctf writeups' },
  { level: 'ok', text: 'net: link up — github, linkedin reachable' },
  { level: 'ok', text: 'session ready. welcome, guest.' },
];
