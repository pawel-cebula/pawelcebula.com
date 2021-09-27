module.exports = [
  {
    name: 'Slurpin (API & SPA)',
    url: '',
    github: 'https://github.com/pawel-cebula/slurpin',
    description: [
      'Slurpin is an app that let you find ramen places in Berlin and rate their bowls.',
      'The backend API is built with Express and PostgreSQL, using JWT for authentication. The client app (SPA) is built with React, using Redux, React Router and Ant Design.',
      'Backend API and database integration testing is done with Jest, while front-end end-to-end testing is done using Cypress.',
    ],
    image: '/assets/slurpin.png',
    stack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'React',
      'Redux',
      'Ant Design',
      'Jest',
      'Cypress',
    ],
  },
  {
    name: 'click-and-find',
    url: '',
    github: '',
    description: [
      'click-and-find is a no-code tool for end-to-end testing.',
      'The SSR app is built in Node and Express, and uses puppeteer to crawl pages, allows user to select elements to find and click, and then generates Cypress test specs. The tests are then run via child_process and their results are parsed from stdout into JSON and displayed in a user-friendly format.',
      'When I joined the project, I’ve refactored the code, built test result routes and developed iterative spec building based on user inputs.',
    ],
    image: '/assets/clickandfind.png',
    stack: ['Node', 'Express', 'Cypress'],
  },
  {
    name: 'Personal website',
    url: 'https://pawelcebula.com',
    github: 'https://github.com/pawel-cebula/pawelcebula.com',
    description: [
      'I built my personal website with Eleventy, a lightweight JavaScript-based static site generator. It features my background, personal projects and occassional blog posts, which are written in markdown and converted to static pages during build.',
    ],
    image: '/assets/personalwebsite.png',
    stack: ['JavaScript', 'Eleventy'],
  },
  {
    name: 'untappd-compare (API & SSR)',
    url: 'https://untappdcompare.com',
    github: 'https://github.com/pawel-cebula/untappd-compare',
    description: [
      'Untappd is an app for finding, rating and reviewing craft beers. My app queries Untappd API to find mutually rated beers of two users, compares those ratings, calculates the average rating score and stores comparisons in the database.',
      'The backend API and SSR app are built with Node, Express, MongoDB, JWT and were deployed to AWS EC2. During this project, I’ve purposefully stuck to low level implementation, i.e. avoiding modern frontend frameworks or Express templates.',
      "Later on, I've also rebuilt the SSR user flow as a Vue.js SPA",
    ],
    image: '/assets/untappdcompare.png',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'AWS EC2', 'Vue.js'],
  },
  {
    name: 'Marident',
    url: 'https://marident.herokuapp.com',
    github: 'https://github.com/pawel-cebula/marident',
    description: [
      'Marident is a simple website for a dental clinic with a contact form that sends requests via email. It was one of my first projects, built when I was learning Django, which was definitely an overkill considering it is just a static website.',
      'I’ve also used TailwindCSS on this project, which I enjoyed working with. Compared with most other CSS frameworks, it is not opinionated and most of its classes are well aligned with the actual CSS properties, which means that with Tailwind you are improving your CSS skills, rather than learning framework specific syntax and patterns.',
    ],
    image: '/assets/marident.png',
    stack: ['Django', 'TailwindCSS', 'Heroku'],
  },
];
