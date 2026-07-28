# my-portfolio

Portfolio cá nhân của **Vo Hoang Anh Quan (K1llV)** — giao diện terminal/CLI, xây bằng **Vite + React**.

🔗 https://quanvo0112.github.io/my-portfolio/

## Chạy local

```bash
npm install
npm run dev      # http://localhost:5173/my-portfolio/
```

Build và xem thử bản production:

```bash
npm run build
npm run preview
```

> Dev server phục vụ ở `/my-portfolio/` chứ không phải `/`, vì `base` trong `vite.config.js` được đặt là `/my-portfolio/`.

## Deploy

Push lên branch `main` là xong — GitHub Actions (`.github/workflows/deploy.yml`) tự build và deploy.

### ⚠️ Bước thủ công bắt buộc (làm một lần)

Vào **repo Settings → Pages → Build and deployment → Source** và chọn **"GitHub Actions"**.

Nếu bỏ qua bước này, workflow sẽ chạy nhưng deploy thất bại (hoặc Pages vẫn phục vụ nội dung cũ từ branch).

## Cấu trúc

```
.github/workflows/deploy.yml   GitHub Actions: build + deploy Pages
public/                        favicon.ico, favicon-16/32.png, apple-touch-icon.png, og-image.png
src/
  components/                  TitleBar, Tabs, BootSequence, Hero, Projects,
                               Ctf, Skills, Education, Contact, InteractiveCli, Prompt, Reveal
  hooks/                       useReveal (IntersectionObserver), useTypewriter
  data/content.js              toàn bộ nội dung trang (sửa ở đây, không sửa trong component)
  styles/index.css             theme terminal + animation
  App.jsx  main.jsx
index.html                     meta Open Graph / Twitter Card, favicon
vite.config.js                 base: '/my-portfolio/'
```

## Sửa nội dung

Mọi text (bio, projects, skills, CTF writeups, contact) nằm trong [`src/data/content.js`](src/data/content.js).

## Troubleshooting

| Triệu chứng | Nguyên nhân thường gặp |
| --- | --- |
| Trang trắng, console báo 404 file `.js`/`.css` | `base` trong `vite.config.js` sai — phải đúng `'/my-portfolio/'` |
| Actions chạy xanh nhưng site không đổi | Settings → Pages → Source chưa đặt "GitHub Actions" |
| Ảnh Open Graph không hiện khi share | `og:image` phải là URL tuyệt đối `https://...`, và cần thời gian để scraper cache lại |
