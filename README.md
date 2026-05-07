# Study Buddie

> India's First Hybrid School ERP + Learning Visibility Platform.
> *Where school management meets student success and parent transparency.*

Study Buddie is the marketing and product website for the Study Buddie platform — a six-page, fully static site built with vanilla HTML5, CSS3, and JavaScript. No frameworks, no build step, no runtime dependencies. Drop the folder on any web server (or open `index.html` in a browser) and it works.

---

## Table of Contents

1. [About the Project](#1-about-the-project)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Pages](#4-pages)
5. [Quick Start](#5-quick-start)
6. [Design System](#6-design-system)
7. [Component Reference](#7-component-reference)
8. [JavaScript Behavior](#8-javascript-behavior)
9. [Adding & Replacing Images](#9-adding--replacing-images)
10. [Customization Guide](#10-customization-guide)
11. [Accessibility](#11-accessibility)
12. [Browser Support & Performance](#12-browser-support--performance)
13. [Deployment](#13-deployment)
14. [Roadmap](#14-roadmap)
15. [Credits](#15-credits)
16. [Contact](#16-contact)

---

## 1. About the Project

**Study Buddie** positions itself as a hybrid platform combining two domains that schools usually buy from different vendors:

- **Full-stack ERP** — Fees, attendance, communication, library/asset management, examinations, HR.
- **Learning Visibility** — Self-study tracking, transparent parent dashboards, predictive intervention, integrated analytics.

The site exists to (a) communicate that hybrid value proposition clearly, (b) let prospective schools, parents, and partners understand the modules at a glance, and (c) capture inbound inquiries via the contact form.

### Brand Identity

| Token | Value |
|---|---|
| Brand name | **Study Buddie** |
| Tagline | *Your Study Partner* |
| Previous name | Parakk-ERP (rebrand in progress; legacy kept on the git remote) |
| Primary blue | `#1B6B93` |
| Primary green | `#2ECC71` |
| Logo | Graduation cap on a shield with a checkmark, blue-to-green gradient (rendered as inline SVG) |

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Markup | HTML5, semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`) | SEO-friendly, accessible by default |
| Styling | CSS3 with custom properties, `clamp()`, Grid, Flexbox | Single tunable token layer; no preprocessor required |
| Scripting | Vanilla JavaScript (ES5-compatible patterns) | No framework, no bundler, no transpile step |
| Fonts | Google Fonts — `Plus Jakarta Sans` (body) + `Sora` (display) | Clean, modern, generous weights |
| Icons | Inline SVG (Lucide-style line icons) | No icon-font HTTP request; recolors via `currentColor` |
| Images | `.webp` (lazy-loaded) | Smaller than JPG/PNG with comparable quality |
| Build | None | The repository *is* the deployable artifact |

There is **no** `package.json`, **no** `node_modules`, and **no** build pipeline. Every file in the repo ships as-is.

---

## 3. Project Structure

```
study-buddie/
├── index.html              Home — hero, "Why Study Buddie?", CTA banner
├── erp.html                ERP Modules — 5 alternating feature blocks
├── visibility.html         Learning Visibility — 3 core features with watermark numerals
├── features.html           Comprehensive Features — 3×3 grid
├── about.html              About — story, mission/vision, founder
├── contact.html            Contact — form + direct info
│
├── css/
│   └── style.css           Single global stylesheet (design tokens + components + responsive)
│
├── js/
│   └── main.js             Navbar, mobile menu, scroll reveal, contact form
│
├── images/                 (Not yet present — see §9)
│   ├── Dashboard.webp      Home hero dashboard mockup
│   ├── ERP.webp            Finance module
│   ├── Attendance.webp     Attendance module
│   ├── Communication.webp  Communication module
│   ├── Library.webp        Library module
│   ├── Examination.webp    Examination module
│   ├── self-study.webp     Visibility — Core Feature 01
│   ├── parent.webp         Visibility — Core Feature 02
│   ├── analytics.webp      Visibility — Core Feature 03
│   └── admin.webp          Founder photo (About page)
│
└── README.md               This file
```

Every HTML page is self-contained: it embeds the same navbar SVG logo and footer markup directly. There are no HTML partials/includes (intentional — this keeps the project framework-free and editable in any text editor).

---

## 4. Pages

### 4.1 [`index.html`](index.html) — Home

| Section | Purpose |
|---|---|
| Hero | Full-viewport gradient hero with badge, headline, subtitle, two CTAs, floating dashboard image |
| Why Study Buddie? | Three pillar cards — **Clarity**, **Efficiency**, **Growth** — with numbered watermark and gradient hover top-border |
| CTA Banner | Full-width gradient banner driving traffic to `visibility.html` |

### 4.2 [`erp.html`](erp.html) — ERP Modules

Compact hero plus five alternating image/text blocks:

1. **Smart Fee & Finance Management** *(Financial Module)*
2. **Live Attendance & Safety Tracking** *(Operations Module)*
3. **Seamless Communication Hub** *(Management Tools)*
4. **Library & Asset Manager** *(Resource Module)*
5. **Dynamic Examination Module** *(Academics Module)*

Each block uses a green-checkmark feature list and a "Learn More" gradient text link to `contact.html`. Backgrounds alternate white → light → white → light → white. On screens ≤1024px the columns stack; the `module--reverse` modifier flips the desktop order so the image appears first on mobile.

### 4.3 [`visibility.html`](visibility.html) — Learning Visibility

Three feature blocks with large gradient `01 / 02 / 03` watermark numerals behind the text column:

1. **Self-Study Tracking**
2. **Transparent Parent Dashboard**
3. **Integrated ERP + Learning Analytics**

### 4.4 [`features.html`](features.html) — Comprehensive Features

Compact hero plus a 3×3 grid (3 cols on desktop, 2 on tablet, 1 on mobile). Each card has an inline SVG icon that swaps to the brand gradient on hover. Cards listed:

```
AI Learning Scrutiny      Predictive Intervention      Self-Study Tracking
Full ERP Automation       Dynamic Examination Module   Library & Asset Manager
Secure Parent-Teacher Chat  Digital Timetable & Tasks  And Many More!
```

### 4.5 [`about.html`](about.html) — About Us

| Section | Purpose |
|---|---|
| Hero | Story badge + founding principle headline |
| The Problem We Solve | Two narrative paragraphs with a large decorative quotation glyph |
| Mission & Vision | Two cards with colored left-bars (blue / green) that morph to gradient on hover |
| Founder | Circular photo with gradient border, name, role, italic gradient quote, LinkedIn link |
| CTA Banner | Drives to `contact.html` |

### 4.6 [`contact.html`](contact.html) — Contact

Two-column layout (form left, info card right). The form uses native HTML5 validation; on submit, JavaScript composes a `mailto:` link to `parakkerp@gmail.com` and hands off to the user's mail client. The info card lists email, WhatsApp (`+91 94245 26998`), and address (`Satna, Madhya Pradesh, India`).

---

## 5. Quick Start

### Option A — Open directly

```bash
# Just open index.html in your browser.
# On Windows:
start index.html
# On macOS:
open index.html
```

### Option B — Serve locally (recommended)

A static server avoids `file://` quirks (some browsers throttle local font loading and disable certain animations).

```bash
# Python 3
python -m http.server 8080

# Node.js (npx serve, no install needed)
npx serve .

# PHP
php -S localhost:8080
```

Then visit `http://localhost:8080`.

### Option C — VS Code Live Server

Install the **Live Server** extension and right-click `index.html` → *Open with Live Server*. Hot-reload makes design tweaks fast.

---

## 6. Design System

All design tokens live as CSS custom properties at the top of [`css/style.css`](css/style.css). Change them once, every page updates.

### 6.1 Colors

| Token | Hex / Value | Used For |
|---|---|---|
| `--primary-blue` | `#1B6B93` | Headings, primary text accents, gradient stop |
| `--primary-green` | `#2ECC71` | Checkmarks, gradient stop, success states |
| `--gradient-main` | `linear-gradient(135deg, #1B6B93 0%, #2ECC71 100%)` | Primary buttons, CTA banner, gradient text |
| `--gradient-hero` | `linear-gradient(160deg, #E8F6F3 0%, #EBF5FB 40%, #FDFEFE 100%)` | Hero section background |
| `--dark-heading` | `#1A202C` | All `h1`–`h6` |
| `--dark-body` | `#4A5568` | Paragraph copy |
| `--muted-text` | `#A0AEC0` | Subtitles, optional labels |
| `--section-bg-light` | `#F7FAFC` | Alternating section backgrounds |
| `--card-bg` | `#FFFFFF` | All card surfaces |
| `--card-border` | `rgba(27,107,147,0.08)` | Subtle card outlines |
| `--card-shadow` / `--card-shadow-hover` | tinted blue shadows | Card elevation, lift on hover |
| `--success-green-light` | `rgba(46,204,113,0.08)` | Badge background, checkmark backplate |
| `--footer-bg` | `#0F2B3C` | Deep navy footer |

### 6.2 Typography

| Use | Family | Weight | Size |
|---|---|---|---|
| Hero headline | `'Sora'` | 800 | `clamp(2.2rem, 5vw, 4rem)` |
| Section title | `'Sora'` | 700 | `clamp(1.8rem, 3.5vw, 2.8rem)` |
| Card title | `'Plus Jakarta Sans'` | 700 | 1.15–1.35rem |
| Body | `'Plus Jakarta Sans'` | 400 | 1.05rem |
| Eyebrow / label | `'Plus Jakarta Sans'` | 600 | 0.8rem uppercase, letter-spacing 0.12em |

### 6.3 Spacing & Radius

| Token | Value |
|---|---|
| Container max width | `1200px` |
| Section padding | `clamp(80px, 10vw, 140px) 0` |
| Card radius | `16px` |
| Button radius | `12px` |
| Pill / badge radius | `100px` |

### 6.4 Easing

| Variable | Curve | Use |
|---|---|---|
| `--ease-out-soft` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal animations |
| `--ease-out-cta` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Buttons, hover lift |

---

## 7. Component Reference

### 7.1 Buttons

```html
<a href="..." class="btn btn-primary">Primary CTA</a>
<a href="..." class="btn btn-outline">Secondary</a>
<a href="..." class="btn btn-on-grad">CTA on gradient banner</a>
<button class="btn btn-primary btn-block">Full-width form submit</button>
```

`.btn-primary` includes a built-in shimmer sweep on hover (`::before` pseudo-element with skewed translucent stripe).

### 7.2 Pill Badge

```html
<span class="badge">Why Study Buddie?</span>
```

Auto-pulses via the `glowPulse` keyframe.

### 7.3 Section Header

```html
<div class="section__head">
    <span class="badge reveal">Eyebrow text</span>
    <h2 class="section__title reveal" data-reveal-delay="120">
        Title with <span class="gradient-text">accent</span>
    </h2>
    <p class="section__subtitle reveal" data-reveal-delay="220">Subtitle copy</p>
</div>
```

### 7.4 Three-card Grid (`why-grid`)

Used on the home page. Each `.why-card` accepts:

- `.why-num` — large gradient watermark numeral (top-right corner)
- `.why-icon` — 52×52 rounded square housing an inline SVG
- `.why-title`, `.why-text`

### 7.5 Alternating Module (`module`)

```html
<section class="module module--light module--reverse module--watermark">
    <div class="container">
        <div class="module-grid">
            <div class="module-text reveal-left">
                <span class="module-watermark">01</span>      <!-- optional -->
                <span class="badge">…</span>
                <h2 class="module-title">…</h2>
                <p class="module-desc">…</p>
                <ul class="feature-list" data-stagger>
                    <li class="reveal"><span class="check">…</span><span>…</span></li>
                </ul>
                <a href="…" class="link-arrow">Learn More <svg>…</svg></a>
            </div>
            <div class="module-image reveal-right">
                <img src="images/X.webp" alt="…" loading="lazy">
            </div>
        </div>
    </div>
</section>
```

Modifiers:
- `.module--light` — switches background to `--section-bg-light`
- `.module--reverse` — text on the left, image on the right (desktop)
- `.module--watermark` — enables the large translucent gradient numeral

### 7.6 Feature Card Grid (`features-grid`)

3×3 grid; cards lift and tint icon on hover. See `features.html` for usage.

### 7.7 CTA Banner (`cta-banner`)

```html
<div class="cta-banner reveal">
    <h2>Headline</h2>
    <p>Subtitle</p>
    <a href="…" class="btn btn-on-grad">Action</a>
</div>
```

The banner has two animated translucent circles in `::before` and `::after` and shifts its gradient position on hover.

### 7.8 Contact Form

The form uses standard `.input` and `.textarea` classes. JavaScript catches submit, validates required fields, and opens `mailto:`.

---

## 8. JavaScript Behavior

[`js/main.js`](js/main.js) is a single IIFE that wires up four interactions on `DOMContentLoaded`:

### 8.1 `initNavbar()`

Adds `.is-scrolled` to `#navbar` once `window.scrollY > 50`, which the stylesheet uses to swap the navbar from translucent to opaque-with-shadow.

### 8.2 `initMobileMenu()`

Toggles `.is-open` on the hamburger button (`#navToggle`) and the link panel (`#navMenu`), animates the three bars into an X via CSS rotations, and locks `body` scroll while the menu is open. Auto-closes when any link inside is tapped.

### 8.3 `initScrollReveal()`

Uses `IntersectionObserver` with `threshold: 0.15` and a `-60px` bottom margin. When an element with `.reveal`, `.reveal-left`, `.reveal-right`, or `.reveal-scale` enters the viewport, it gets `.visible` and the corresponding CSS animation plays.

Stagger options:
- `data-reveal-delay="450"` on an element sets an explicit delay in **milliseconds**.
- A `data-stagger` attribute on a parent container auto-staggers reveal children by 100ms each.

If `IntersectionObserver` is missing (very old browsers), all reveal elements are made visible immediately.

### 8.4 `initContactForm()`

- Validates that `name`, `email`, and `message` are non-empty.
- On success, builds a `mailto:parakkerp@gmail.com` URL with subject + body and navigates to it (the user's email client takes over).
- On failure, writes a red message into `.form-status`.

### 8.5 `initYear()`

Drops the current year into `<span id="year">` in the footer.

> **Want a real backend submission?** Replace the body of `initContactForm()` with a `fetch()` call to your endpoint (Formspree, Netlify Forms, Web3Forms, your own API, etc.). The DOM contract is already in place.

---

## 9. Adding & Replacing Images

The `images/` directory ships **empty** in this repository — the legacy `.webp` files were deleted before the rebrand. The HTML references the following filenames:

| File | Used By |
|---|---|
| `Dashboard.webp` | `index.html` hero |
| `ERP.webp` | `erp.html` Module 1 |
| `Attendance.webp` | `erp.html` Module 2 |
| `Communication.webp` | `erp.html` Module 3 |
| `Library.webp` | `erp.html` Module 4 |
| `Examination.webp` | `erp.html` Module 5 |
| `self-study.webp` | `visibility.html` Feature 01 |
| `parent.webp` | `visibility.html` Feature 02 |
| `analytics.webp` | `visibility.html` Feature 03 |
| `admin.webp` | `about.html` founder photo |

### Image guidelines

- **Format:** `.webp` (best size/quality trade-off in modern browsers).
- **Dimensions:** Module images render at `aspect-ratio: 4 / 3`; export at minimum `1200×900`. Hero dashboard renders up to `920px` wide; export at `1840×1100` for retina sharpness.
- **Founder photo:** Square, ≥`512×512`. Cropped to a circle by CSS.
- **Compression:** Aim for ≤200 KB per image. Use `cwebp -q 80` or [Squoosh](https://squoosh.app).
- **Alt text:** Already filled in for each `<img>`. Update if you swap subjects.

### Optional: convert from JPG/PNG

```bash
# macOS / Linux (cwebp from the libwebp package)
cwebp -q 82 source.jpg -o output.webp

# Bulk conversion
for f in *.jpg; do cwebp -q 82 "$f" -o "${f%.jpg}.webp"; done
```

---

## 10. Customization Guide

### 10.1 Change the brand colors

Edit the `:root` block in [`css/style.css`](css/style.css). Update both the solid `--primary-*` tokens *and* the matching gradient hex stops in `--gradient-main` (CSS doesn't compute gradients from variables in older browsers, so the hex values are inlined in a few places).

```css
:root {
    --primary-blue: #YOUR_BLUE;
    --primary-green: #YOUR_GREEN;
    --gradient-main: linear-gradient(135deg, #YOUR_BLUE 0%, #YOUR_GREEN 100%);
    /* ...leave the rest alone unless you want to retune... */
}
```

Then run a find-and-replace across `style.css` for the legacy `#1B6B93` / `#2ECC71` literals to be thorough.

### 10.2 Swap the logo

The logo is inline SVG (search any HTML page for `<svg class="brand-mark"`). Replace the `<path>` data with your own; keep the gradient `<defs>` if you want the brand fill, or replace `fill="url(#sb-grad)"` with a solid color.

If you have a different SVG file:

```html
<a href="index.html" class="nav-brand">
    <img src="images/logo.svg" class="brand-mark" alt="Brand mark">
    <span class="gradient-text">Study Buddie</span>
</a>
```

### 10.3 Add or remove a navbar link

Edit the `<div class="nav-links">` block on **every** HTML page (because there is no shared header partial). Keep the `is-active` class only on the link matching the current page.

### 10.4 Replace contact details

Two places per page:

- The email/WhatsApp/address on `contact.html`.
- The recipient address inside `initContactForm()` in `js/main.js`.

### 10.5 Add a new page

1. Copy any existing page (e.g. `features.html`) as your starting template.
2. Update `<title>`, `<meta name="description">`, and the canonical URL.
3. Update the navbar block: add a new `<a class="nav-link">…</a>` and mark it `is-active` on this page only.
4. Add the same new link to **every other page's** navbar so navigation is consistent.

---

## 11. Accessibility

- Every page uses semantic landmarks: `<nav aria-label="Main navigation">`, `<main>`, `<footer>`.
- Decorative SVGs have `aria-hidden="true"`.
- Buttons that toggle state (the hamburger) expose `aria-expanded`.
- All interactive elements are reachable by keyboard; focus styles are inherited from the browser default — feel free to add a custom `:focus-visible` outline if your audit requires.
- Color contrast: body text (`#4A5568` on `#FFFFFF`) is ≥7:1; primary headings (`#1A202C`) are ≥15:1. Brand-blue text on the `success-green-light` badge background passes WCAG AA at the badge size.
- The form uses native HTML5 validation (`required`, `type="email"`); the status region has `role="status"` and `aria-live="polite"`.
- `prefers-reduced-motion: reduce` disables animations, transitions, and floats site-wide.

---

## 12. Browser Support & Performance

### Supported browsers

| Browser | Version |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari | 14+ |
| Chrome Android | last 2 versions |

The site uses `backdrop-filter`, CSS custom properties, `clamp()`, Grid, Flexbox, and `IntersectionObserver` — all baseline since 2020.

### Performance characteristics

- Single CSS file (~30 KB unminified) and single JS file (~5.5 KB).
- All images use `loading="lazy"` except the hero (which uses `loading="eager"` for fast LCP).
- Google Fonts are preconnected and use `display=swap` to avoid invisible text during load.
- No third-party JavaScript runtime, no analytics tags by default, no cookie banner needed (add your own if you embed analytics later).
- Lighthouse target (mobile, throttled): Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥100, after images are added.

---

## 13. Deployment

Because the project is plain static files, every static host works:

### GitHub Pages

```bash
git add .
git commit -m "Deploy Study Buddie"
git push origin main
```

Then in repo Settings → Pages → set the source to `main` branch, root directory.

### Netlify (drag-and-drop or Git-connected)

1. Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop), **or**
2. Connect the repo with build command `(none)` and publish directory `.`.

### Vercel

```bash
npm i -g vercel
vercel
```

Accept defaults (framework = "Other", build = none, output = `.`).

### Cloudflare Pages, Render, Surge, S3 + CloudFront

Same story — point the static-site service at the project root with no build step.

### Custom server (Nginx)

```nginx
server {
    listen 80;
    server_name studybuddie.example.com;
    root /var/www/study-buddie;
    index index.html;
    location / { try_files $uri $uri.html $uri/ =404; }
    location ~* \.(webp|css|js|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 14. Roadmap

Items intentionally **not** built yet — pull-request territory:

- Server-side form submission (Formspree/Netlify Forms/own API).
- Blog / news section with markdown-based posts.
- Pricing page with comparison table.
- Mobile-app marketing page (the legacy `mobile-app.html` was removed during the rebrand; reintroduce when the app ships).
- `sitemap.xml` and `robots.txt` regeneration when more pages are added.
- Favicon set (`.ico`, `192×192`, `512×512`, Apple touch icon, `manifest.json`).
- Real Open Graph cover images per page (`og:image`).
- Internationalization scaffolding (Hindi alongside English).

---

## 15. Credits

| Asset | Source |
|---|---|
| Fonts | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) and [Sora](https://fonts.google.com/specimen/Sora) — Google Fonts, OFL |
| Icons | Custom inline SVGs in [Lucide](https://lucide.dev/) style (ISC) |
| Logo | Designed for Study Buddie (graduation cap on shield with checkmark, brand gradient) |
| Color palette | Derived from the Study Buddie logo |

---

## 16. Contact

| Channel | Detail |
|---|---|
| Email | [parakkerp@gmail.com](mailto:parakkerp@gmail.com) |
| WhatsApp | [+91 94245 26998](https://wa.me/919424526998) |
| Address | Satna, Madhya Pradesh, India |
| Founder | Om Mishra |

---

&copy; 2025 Study Buddie. All rights reserved.
