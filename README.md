# Mikolaj Mikuliszyn — Personal Website

This is the source code for my personal website, built to showcase who I am, the projects I'm working on, and the ideas I'm exploring. The site is fully responsive, cleanly structured, and includes a podcast-style blog section titled **"A Dive Into My Mind"**, where I reflect on topics like artificial emotion, cognitive modeling, AI philosophy and much more.

---

## 🌐 Features

- Sleek dark theme with modern accent colors
- Mobile-first responsive layout with hamburger menu
- Smooth scroll with fixed-header offset
- Modular project showcase with tech tags
- Linked long-form podcast reflections
- Easily extendable and lightweight
- Error page for better user experience
- Optimized for performance and accessibility

- ⚠️ At the moment the emailing system DOES NOT WORK -- will get fixed in a future update ⚠️

---

## 📁 Structure

- `index.html` — Main single-page site with all sections (Intro, About, Projects, Mind, Contact)
- `error.html` — Custom error page for better user experience
- `/assets/` — All static files
  - `css/` — Stylesheets
  - `images/` — Visual content (project previews, icons)
  - `js/` — Optional interactivity (e.g. mobile menu)
- `/podcast/` — Individual podcast-style post pages (long-form discussions)

---

## 🚀 Getting Started

1. Clone or fork this repository  
2. Edit `index.html` with your own bio, projects, and links  
3. Replace images in `/assets/images`  
4. Add new blog posts as `.html` files under `/podcast/`  
5. Deploy using GitHub Pages or your preferred static host

---

## 🎨 Customization

You can change the color theme by modifying the CSS variables in `assets/css/style.css`.

```css
:root {
    --primary-color: #1e1e2f;
    --secondary-color: #7f5af0;
    --accent-color: #2cb67d;
    --light-color: #f5f5f5;
    --dark-color: #16161a;
    --border-color: #2a2a3a;
}
```

Want a different vibe? Try generating your own palette using [coolors.co](https://coolors.co).

---

## ✍️ Adding Projects or Posts

### ➕ Projects
1. At the very bottom of `/index/` make copies of project data and fill in the details

### 🎙️ Podcast Posts
1. Same as projects, make a copy of podcast data in `/index/` and fill it out
2. Make a site leading to your podcast page

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).  
You're free to explore, modify, and use this structure in your own projects — just please credit where appropriate.

---
