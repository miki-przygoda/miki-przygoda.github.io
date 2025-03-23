# Personal Website

A sleek, modern personal website template with a dark theme featuring sections for intro, about, projects, podcast, and contact information.

## Features

- Stylish dark theme with neon accents
- Mobile-friendly navigation
- Smooth scrolling
- Project showcase
- Podcast episode section with template pages
- Contact form
- Animated scroll effects

## Structure

- `index.html` - Main page with all sections
- `assets/` - Contains all static assets
  - `css/` - Stylesheets
  - `js/` - JavaScript files
  - `images/` - Image files (add your own)
- `podcast/` - Individual podcast episode pages

## Usage

1. Clone or download this repository
2. Customize the content in `index.html` with your own information
3. Replace placeholder images in the `assets/images/` directory
4. Deploy to your favorite hosting service

## Customization

### Colors

The site uses a modern dark color scheme with the following variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #1e1e2f; /* deep navy background */
    --secondary-color: #7f5af0; /* bold accent violet */
    --accent-color: #2cb67d; /* neon green */
    --light-color: #f5f5f5; /* light text */
    --dark-color: #16161a; /* section background / shadows */
    --border-color: #2a2a3a; /* slightly lighter than primary for borders */
    --success-color: #2cb67d; /* neon green */
}
```

You can modify these colors to suit your preferences.

### Adding Projects

To add more projects, simply duplicate the project card structure in the projects section of `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/project1.jpg" alt="Project 1">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn small">View Demo</a>
            <a href="#" class="btn small secondary">GitHub</a>
        </div>
    </div>
</div>
```

### Adding Podcast Episodes

1. Create a new HTML file in the `podcast/` directory
2. Use the structure from `podcast/episode1.html` as a template
3. Update the content with your episode details
4. Add a card for the new episode in the podcast section of `index.html`

## License

This template is available for personal and commercial use. 