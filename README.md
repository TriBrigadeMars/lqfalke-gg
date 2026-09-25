# LQFalke — Writer & Creator

LQFalke is a writer, creator, and professional building things that matter. This repository hosts the
official static website — a dark, modern, multi-page site built for GitHub Pages.

The site covers three areas:

- **Writing** — Essays and long-form pieces on technology, creativity, and the craft of building.
- **YouTube** — Video content breaking down the same ideas into digestible insights.
- **Professional Work** — A showcase of products, systems, and solutions built over the years.

## File Map

```
.
├── .nojekyll                          # Disables Jekyll processing on GitHub Pages (empty file)
├── index.html                         # Home page — hero, cards, CTA band
├── writing.html                       # Writing page — post list
├── work.html                          # Work page — work list
├── 404.html                           # Branded not-found page
├── assets/
│   ├── css/
│   │   ├── variables.css              # Design system tokens (CSS custom properties)
│   │   └── style.css                  # Base styles and component styles
│   └── js/
│       └── main.js                    # Mobile nav toggle + dynamic footer year
└── .github/
    └── workflows/
        └── deploy.yml                 # GitHub Actions Pages deployment workflow
```

## How to Add a Writing Post

Writing posts live in `writing.html` inside the `<ul class="post-list">` element. Each post is a
`<li class="post-item">` block. To add a new post, duplicate an existing `.post-item` block and
update its contents:

```html
<li class="post-item">
  <time class="post-date" datetime="2025-01-15">Jan 15, 2025</time>
  <h2><a href="./writing.html">Your Post Title</a></h2>
  <p>A short summary of the post content.</p>
  <div class="post-tags">
    <span class="post-tag">Tag Name</span>
  </div>
</li>
```

- Replace the `datetime` attribute and visible date text with the real publication date.
- Replace the title, summary, and tags as needed.
- Posts are ordered newest-first, so insert new items at the top of the list.

## How to Add a Work Entry

Work entries live in `work.html` inside the `<ul class="work-list">` element. Each entry is a
`<li class="work-item">` block. To add a new entry, duplicate an existing `.work-item` block and
update its contents:

```html
<li class="work-item">
  <div class="work-meta">
    <span class="work-role">Your Role</span>
    <span class="work-period">2023 — Present</span>
  </div>
  <h2>Project Name</h2>
  <p>A description of the project, your contributions, and the technologies used.</p>
  <div class="post-tags">
    <span class="post-tag">Technology</span>
  </div>
</li>
```

- Update the role, period, project name, description, and tags.
- Entries are ordered newest-first, so insert new items at the top of the list.

## Placeholder Links to Replace

The following placeholder URLs appear throughout the site and should be replaced with your real
links before going live:

| Placeholder URL                           | Where to replace                                                                 |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| `https://www.youtube.com/@LQFalke`        | `index.html`, `writing.html`, `work.html`, `404.html` — nav link, cards, CTAs    |
| `https://x.com/LQFalke`                   | Footer links in all HTML pages                                                   |
| `mailto:hello@lqfalke.dev`                | Footer email link and subscribe-box email link in `work.html`                    |

## Enabling GitHub Pages

1. Push to the `main` branch — the `deploy.yml` workflow will run automatically.
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Source**, select **GitHub Actions**.
4. The site will be built and deployed automatically. Once complete, it will be live at
   `https://tribrigademars.github.io/lqfalke-gg/`.

## Local Preview

To preview the site locally, run:

```bash
npx serve .
```

Then open `http://localhost:3000` in your browser. All pages (`index.html`, `writing.html`,
`work.html`, `404.html`) will be served with correct relative asset paths.
