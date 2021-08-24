module.exports = [
  {
    name: "untappd-compare (API & SSR app)",
    url: "https://untappdcompare.com",
    github: "https://github.com/pawel-123/untappd-compare",
    description: [
      "Untappd is an app for finding, rating and reviewing craft beers. In order to validate the claim of my friends’ that I’m a harsh reviewer, I’ve built an app that queries Untappd API to find mutually rated beers of two users, compares those ratings, calculates the average rating score and stores all comparisons in the database.",
      "The backend API and server-side rendered frontend is built with Node and Express, uses MongoDB and was deployed to AWS EC2. During this project, I’ve purposefully tried to stick to low level implementation, i.e. avoiding modern frontend frameworks and Express view templates, or using basic jsonwebtoken and bcrypt for authentication."
    ],
    image: "/assets/project.png",
    stack: ["Node", "Express", "MongoDB", "AWS EC2"]
  },
  {
    name: "click-and-find",
    url: "",
    github: "",
    description: [
      "click-and-find is a simple no-code tool for end-to-end testing. This project was started by a friend of mine, who wanted an easy way to test his online store built with Webflow, and he invited me to join in. It’s built in Node and Express, and uses puppeteer to crawl pages, allows user to select elements to find and click, and then generates cypress test specs. The tests are then run via child_process and their results are parsed into JSON and displayed in a user-friendly format.",
      "When I’ve joined the project, I’ve cleaned up the code, built test result routes and added iterative spec building by specifying which element to click in order to crawl next page."
    ],
    image: "/assets/project.png",
    stack: ["Node", "Express", "Cypress"]
  },
  {
    name: "Marident",
    url: "",
    github: "",
    description: [
      "Marident is a simple website for a dental clinic with a contact form that sends requests via email. It was one of my first projects, built when I was learning Django, which was definitely an overkill considering it is just a static website.",
      "I’ve also used TailwindCSS on this project, which I enjoyed working with a lot. Compared with other CSS frameworks, it is not opinionated and most of its classes are well aligned with the actual CSS properties, which means that with Tailwind you are improving your CSS skills, rather than learning  framework specific syntax and patterns."
    ],
    image: "/assets/project.png",
    stack: ["Django", "TailwindCSS", "Heroku"]
  },
  {
    name: "pawelcebula.com",
    url: "https://pawelcebula.com",
    github: "",
    description: [
      "I built my personal website with Eleventy, a lightweight JavaScript-based static site generator. It features my background, personal projects and occassional blog posts, which are written in markdown and converted to static sites during build."
    ],
    image: "/assets/project.png",
    stack: ["Eleventy"]
  },
]