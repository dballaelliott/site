# My Hugo Site with Maverick Theme

A minimal Hugo static site using the [Maverick theme](https://github.com/canhtran/maverick).

## Quick Start

### Prerequisites
- [Hugo](https://gohugo.io/installation/) (version 0.125.5 or later)
- Git

### Development

1. **Start the development server:**
   ```bash
   hugo server -D
   ```
   The site will be available at `http://localhost:1313`

2. **Create new content:**
   ```bash
   # Create a new blog post
   hugo new posts/my-new-post.md
   
   # Create a new page
   hugo new pages/about.md
   ```

3. **Build for production:**
   ```bash
   hugo
   ```
   The built site will be in the `public/` directory.

## Project Structure

```
├── archetypes/          # Content templates
├── assets/             # Asset files (SCSS, JS, etc.)
├── content/            # Content files (Markdown)
├── data/               # Data files
├── i18n/               # Internationalization files
├── layouts/            # Layout templates (overrides theme)
├── static/             # Static files (images, etc.)
├── themes/maverick/    # Maverick theme
└── hugo.toml          # Hugo configuration
```

## Theme Features

The Maverick theme is a minimal, content-focused theme that includes:

- Clean, readable typography
- Syntax highlighting for code blocks
- Tags and categories support
- RSS/Atom feeds
- Responsive design
- GitHub-based commenting system (configurable)

## Configuration

Key configuration options in `hugo.toml`:

- `title`: Site title
- `params.author`: Author name
- `params.description`: Site description
- `menu.main`: Navigation menu items

## Content Creation

### Blog Posts
Create new blog posts in the `content/posts/` directory:

```bash
hugo new posts/my-post.md
```

### Pages
Create new pages in the `content/pages/` directory:

```bash
hugo new pages/about.md
```

## Deployment

The site can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- And many others

## License

This project uses the Maverick theme, which is available under its own license terms.
