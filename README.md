# pawelcebula.com

This is my first personal website, which includes:

- Home
- About me
- Projects
- Posts
- Contact

## Technology

The website was built with [Eleventy](https://www.11ty.dev/), a JS-based static site generator. Static pages are generated based on data from `.js` and `.json` data files, as well as `.md` files (for blog posts), using mostly `.njk` templates.

## To dos:

- [ ] Optimize for SEO and social media (i.e. `og` and `twitter` meta tags)
- [ ] Store images externally
- [ ] Syntax highlighting for code snippets in blog posts
- [ ] Analytics
- [ ] Automate image processing
- [ ] Pagination on posts

## Local setup

To run the Eleventy app locally:

1. Clone the repository

```
git clone https://github.com/pawel-cebula/pawelcebula.com.git
```

1. Install dependencies

```
npm install
```

3. Start the app (generates static files in `dist` folder and starts the app locally via Browsersync for auto-refresh, defaults to `http://localhost:8080/`)

```
npm start
```
