# Changelog

## [2.0.0] — 2026-03-26

### Breaking changes
- Complete redesign: cyberpunk → minimalist editorial
- New file structure (articles/, publications/, extensions/, assets/)
- Old URLs (publications_page.html, code_examples_page.html) replaced

### Added
- **VSCode extensions showcase** — /extensions/ page with all 5 L.A.L. products
- **Extensions section on vizitka** — block 05 with brand-colored cards
- **Proof points section** — 4 key metrics (7+ years, 40 engineers, 50+ pubs, patent)
- **Three expertise domains** — dev/management/analytics with color-coded cards
- **External links section** — Habr, LinkedIn, GitHub, Telegram, eLibrary, ORCID
- **Dark/light mode** — automatic via prefers-color-scheme
- **OG meta tags** — proper social media previews
- **favicon** — inline SVG, no extra file needed
- **robots.txt + sitemap.xml** — SEO basics
- **GitHub Actions CI/CD** — auto-deploy on push to main
- **Publications catalog** — filter by category (development/research)
- **Habr article link** — OT vs CRDT (habr.com/p/1009742/) in publications

### Fixed
- **Phone number** — was +7(995)445-29-20, now correct +7(918)510-29-20
- **Photo** — was referencing missing photo.jpg, now uses photo2.jpg → assets/photo.jpg
- **MyOffice city** — was "Санкт-Петербург", now correct "Москва"
- **Footer year** — was "© 2025 ... обновлено 26 апреля 2025", now "© 2026 ... 25 марта 2026"
- **"Ключевые достижения" heading bug** — was showing "Обязанности:" text
- **Experience "9+ years"** — corrected to "7+ years" per resume
- **CSoft timeline** — split into proper periods (developer → team lead → head of dept)
- **NIC dates** — corrected to 2018-2023 per resume
- **Job title** — "Руководитель группы разработчиков" → "Team Lead / Senior C++ Developer"
- **Education 2017** — added missing "Бакалавр" degree

### Removed
- Cyberpunk theme (matrix background, neon glow, glitch effects, orbital rings, particles)
- Telegram WebApp SDK (not used)
- MTS block (not in resume, not IT-relevant)
- Empty "Портфолио" placeholder section
- Empty "Отзывы" placeholder section
- 7-item navigation (replaced with 2-link nav)
- ~200 lines of dead commented code in script.js
- ins.css (38KB), investor_mode.css (17KB) — removed from main bundle
- Google Fonts: Orbitron, Rajdhani, Space Mono — replaced with DM Sans/Mono

### Changed
- index.html: 622 lines → ~200 lines (hub model instead of resume dump)
- styles.css: 29KB (1515 lines) → ~6KB (unified style.css)
- script.js: 487 lines → 15 lines
- Full responsibilities lists → compact timeline (1 line per role)
- 19 flat skill tags → 3 expertise domain cards
- Bio paragraph → 2 sentences with concrete specifics

## [1.0.0] — 2025-04-26

- Initial cyberpunk-themed resume site on Netlify
