---
title: Self-taught full-stack web development roadmap (2021)
description: Learning to code on your own has never been more accessible than today. As long as you have a computer and a decent internet connection, the amount of free, high-quality resources is just incredible. The challenge these days is to pick the right ones that will provide quality, up-to-date content with an optimal progression and level of difficulty. As the amount of resources increases, it becomes increasingly challenging to filter through the noise. This is an opinionated roadmap for aspiring, self-taught full-stack web developers. All the recommended resources are free to access.
date: 2021-09-27
tags: ['posts', 'Learning', 'Roadmap']
---

Learning to code on your own has never been more accessible than today. As long as you have a computer and a decent internet connection, the amount of free, high-quality resources is just incredible. The challenge these days is to pick the right ones that will provide quality, up-to-date content with an optimal progression and level of difficulty. As the amount of resources increases, it becomes increasingly challenging to filter through the noise.

When I started learning to code, I've approached several friends who are self-taught developers and asked them about their journey and the resources they've used. Each of them provided very useful insights. Each of them said they get asked this question a lot and have been thinking about writing up their thoughts.

I've started getting these questions recently myself so I decided to reflect on my own learning path and write up **an opinionated roadmap for aspiring, self-taught full-stack web developers** in 2021, who had little to no prior exposure to programming in the past.

**Web development involves building websites and modern web applications that run in the browser**. However, thanks to how the framework ecosystem has developed, once you complete this roadmap, you can also dive into mobile app development through tools like React Native

## Important disclaimers

- **This is an opinionated roadmap** based on my personal learnings - it doesn't include all the resources I've come across and it doesn't reflect the order in which I went through them. It does take into account my insights from my journey and reflects how I would do it the second time around.
- **Everyone has a different preferred learning style**. Some people prefer interactive courses, others video tutorials and others might enjoy going through written resources such as books and documentation. There's no right choice but I believe that most people would benefit from a good balance between these types of resources, which might vary at different stages of their journey.
- **It's impossible to tell how long it will take you to go through this roadmap**. Everyone is different and might be comfortable with a different pace. It hugely depends on the constraints that you have and how many hours you can dedicate on average per day. I started on this path in January 2020 and have finished my preparations to start interviewing in September 2021. I was able to dedicate approximately 2-3 hours on average per day, while working full-time. But take this as just one data point and don't hang up too much on how long it takes. You might be able to do it in half that time. Or you might need twice as long. It really doesn't matter and as long as you enjoy the process, you'll get there eventually.
- **This might not a roadmap that's optimal for those with a strong technical background and an inkling towards computer science or data science**. However, it can still serve as a smoother introduction to programming and provides some checkpoints at which you can dive deeper or jump off in those directions.

## Principles to keep in mind

Along my journey, I've gathered a few key learnings and principles that might be useful to keep in mind as you progress. However, even if you read through them now, you will probably need to make some of these mistakes yourself in order to really make these concepts stick. Everyone says that you should try to learn from others' mistakes when you can but it is definitely easier said than done.

- **Focus on fundamentals first, don't dive into frameworks too early**. Otherwise, you will get lost in the magic that happens in the black box and you'll lose a lot of time (and sanity) trying to debug things that you don't understand.
- **Follow along with the code while going through the resources**. Type out the code that is shown in the examples, play with it, try to make small changes, and anticipate their impact.
- **Take notes when learning**. Try to not just copy and paste but write them **in your own words**. It's a great test to see if you really understood the concept. It will help to improve retention and it will save you time on searching for things that you've already figured out in the past. Developing this habit had probably the biggest impact on my learning process. If you're not sold on it yet or if you want to study note-taking in more detail, check out ["How to Take Smart Notes"](https://g.co/kgs/8CgMPC) by S. Ahrens.
- **Learn to use official documentation early**. Understand how the information is structured, i.e. when It's intimidating at the beginning but you will get comfortable with it eventually and you will quickly start realizing how powerful it is to be able to navigate it on your own.
- **Don't skip the exercises and assignments**, try to complete them. If you struggle, take a break, come back to it, read up on relevant concepts. If you fail, don't worry, check out the solutions, extract learnings and try to solve it again yourself. Try to not get stuck again on the same topic in the future - good notes will help.
- **Work on personal projects** that are not part of course materials, even if it's on a micro-scale. You've just learned CSS Flexbox? Try to build a simple restaurant menu with Flexbox as a layout method. You can find such project ideas for any topic or concept. As you progress, make these projects larger in scope and more ambitious. You'll learn a lot more when you try to implement something that you've not seen before. You've learned how to build text-based forms in React? Try adding a file upload feature that was not part of the tutorial. Do some research, pick the potential approach, and give it a go. This is a fundamental skill that you will need throughout your career as a developer.
- **Keep a good balance between different forms of learning** by splitting your day or week or month into different parts, i.e. go through a couple of chapters of a book, then work on the next part of the course, then put in some time into your personal project.r assignment.
- **If you get stuck, take a break, go for a walk, go to bed**, don't waste a few hours going down the rabbit hole. You'll be surprised how often the answer or insight will come to you unexpectedly as you go about other things. And if it doesn't, you'll sit down again, refreshed, and probably figure it out much quicker than you would have otherwise.

With these principles in mind, it's time to get started with the first steps on your journey.

## Step 1 - freeCodeCamp<void>.org

[freeCodeCamp](https://www.freecodecamp.org/) is an amazing resource that offers interactive courses with a browser based code editor and integrated tests. Each exercise provides some theory and explanation, an example, and a small code challenge. These bite sized lessons are a good entry point at the beginning and the fast feedback loop and slight gamification helps to get you going in those early days. I would recommend focusing on the first two parts of their curriculum.

- **Responsive Web Design** (part 1) introduces HTML, CSS, and principles of responsive and accessible web design. Pay a lot of attention to Flexbox and Grid, which are the most common modern layout methods, crucial for implementing responsive designs.
- **JavaScript Algorithms and Data Structures** (part 2) cover basic syntax, data structures, operations, algorithms, object-oriented programming, functional programming, ES6 (more recent) syntax, and regular expressions. This provides an overview of programming and language fundamentals while developing a new way of thinking and problem-solving skills. The examples and exercises will be very applicable and useful when building your first applications, where you often have to manipulate data structures.

When going through the freeCodeCamp curriculum and come across a challenging concept or syntax that you're not familiar with, try to refer to [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) to get a better understanding of how some data structure or method works. Just type i.e. _"array map MDN"_ in your search engine and you'll find the [right page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Understand how these pages are structured - what are the mandatory and optional parameters, what is the return value, what does the syntax look like, and in which examples is this method used.

If you need some better, more visual explanation of a concept, check out some of the YouTube channels. There are many educators that provide amazing content. I've found [Ben Awad](https://www.youtube.com/c/BenAwad97) and [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) to be particularly good at explainig the majority of concepts.

## Step 2 - Introduction to computer science

Now that you're familiar with your first programming language, basic data structures, and algorithms, it's a good time to get familiar with the fundamentals of computer science, while getting exposed to another language. Some concepts will overlap with what you've learned so far but you will also get a better understanding of how computers work or get familiar with some new concepts like abstraction or algorithmic complexity. You don't need to go too deep at this stage and you don't need to understand everything that's covered but it's helpful to know what's out there in order to know where to look when you run into some more challenging problems.

There are two courses that are very popular.

- [MIT's 6.00.1x Introduction to Computer Science and Programming Using Python](https://www.edx.org/course/introduction-to-computer-science-and-programming-7)
- [Harvard's CS50 Introduction to Computer Science](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)

I've personally liked the teaching style of the MIT course more but you can't go wrong with either of them. After you complete this course, you have a chance to take a further detour or deep dive into the world of computer and data science, which might be a good idea if you enjoyed the assignments from these courses more than the freeCodeCamp curriculum. MIT offers [6.00.2x Introduction to computational Thinking and Data Science](https://www.edx.org/course/introduction-to-computational-thinking-and-data-4), while Harvard offers [CS50 Introduction to Artificial Intelligence with Python](https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python). Once you complete those, you can again decide if you want to continue down that route (in which case you should look for another roadmap) or if you want to get back to web development.

## Step3 - JavaScript fundamentals, in depth

While the second part of freeCodeCamp's curriculum provides a great introduction to JavaScript, there are areas there are some critical concepts that are only covered later in their curriculum or that might be worth studying in more detail. It is tempting to dive into the modern frameworks at this point but trust me - you'll save yourself a lot of time and frustration by spending enough time on covering your bases.

### javascript<void>.info

[javascript.info](https://javascript.info/) provides a very good format of written explanations, examples and exercises. It can be very exhaustive as it covers almost all the modern and historical concepts so use your judgment to decide which parts to skip, if it gets too detailed, especially if it's an old part of the language or API. If you ever come across it elsewhere, you'll at least know what it is or where to look for it. The following sections are particularly worth covering:

- **1.11. Promises** - this is one of the most important concepts in JavaScript and it's important to understand very well how they work before you start using modern syntax and patterns like async/await
- **2\. Browser API** - go through the majority of this section, as it's critical to understand how to manipulate browsers, even if a lot of these patterns are currently abstracted in the modern frontend frameworks and libraries like React
- **3.3. Network requests** - focus on the fetch API (understand how to use it with promises) and skim through the rest, which includes some older (i.e. XMLHttpRequest) and more advanced (i.e. WebSocket) concepts
- **3.4 Storing data in the browser** - cookies and localStorage are commonly used for things like storing authentication tokes or other user information

### You Don't Know JavaScript (Yet)

**YDKJS** is a book series with 6 volumes that go deep on how JavaScript works under the hood. Sometimes it might feel like it goes too deep for this stage, but having a high-level understanding of these inner workings of the language will be beneficial later on and will reinforce everything you have learned up to this point.

The first 2 books - **"Get Started"** and **"Scope & Closures"** - have already been released as a second edition and are available on [GitHub](https://github.com/getify/You-Dont-Know-JS). The next 4 books (starting from **"this & Object Prototypes"**) are still only available as a first edition. Even though they were released a few years ago, the vast majority of concepts are still very relevant. Some patterns, like async generators, might seem outdated, however, they are very useful in order to understand how some of the commonly used concepts like async/await work under the good.

It's also worth noting that these books are quite opinionated so don't take everything you read as hard rules. The author tends to highlight the areas where many people might disagree with his viewpoints and encourages you to form your own opinions.

There is another book that has been recommended a lot as a strong companion to the YDKJS series - ["JavaScript, The New Toys"](https://thenewtoys.dev/) - I've not read it so far but it's next on my list.

## Step 4 - Modern, full-stack JavaScript

Now that you've covered your bases sufficiently, it's time to learn the modern web development stack. By far the best resource I've come across for this purpose is the [Full Stack Open](https://fullstackopen.com/en/) course, which covers almost all important technologies and concepts, including

- **React** - frontend library
- **Node.js** and Express - backend framework
- **MongoDB** and Mongoose - database and object data modeling,
- **JWT** - authentication
- **Jest** and **Cypress** - testing
- **Redux** - state management
- **React Router** - routing and navigation
- **CSS** - styling with various approaches, i.e. vanilla CSS, CSS-in-JS, styled-components, UI frameworks
- **GraphQL** - query language
- **TypeScript** - superset of JavaScript that brings static typing
- **React Native** - mobile development
- **GitHub Actions** - CI/CD
- **Docker** - containers (recent addition)

Covering parts up until React Router and CSS should be sufficient to get your first developer role but it's useful to get at least familiar with some of the modern technologies like GraphQL and TypeScript as they are increasingly becoming standard in the market.

This stack is fully in line with what is used by the majority of tech companies these days. Go to any job board, search for web development jobs and you'll see all these keywords across most of the job descriptions.

The teaching style of the course is also very effective. Written theory, examples, good anticipation of concepts where you might need a bit more explanation, links to external resources, and extensive, challenging but well-structured exercises. While I've not attended a coding bootcamp, it appears that the curriculum of Full Stack Open overlaps fully with most of them, while being completely free. It's really an incredible resource.

**Before you start the Full Stack Open course, make sure you understand the basics of version control with Git and GitHub**. The introduction to the course includes some links and you can find many other tutorials online, such as [Git and GitHub for Beginners - Crash Course](https://www.freecodecamp.org/news/git-and-github-crash-course/) from freeCodeCamp.

## Step 5 - Projects

Hopefully, you've worked on some personal projects up until this point. Now is also a good time to bring all the learnings together and work on some bigger projects, such as your personal website and a full-stack web application that can be your flagship portfolio project. Ideally, try to build something that solves a particular problem, something that people might use in the real world. If you're struggling to come up with ideas, build a clone of one of the popular web apps that you're already using. Don't spend too much time crafting a perfect concept. Focus on building, applying everything you've learned to date while pushing yourself beyond, and include some features that you've never come across before and figure out how to build them yourself.

## Step 6 - Filling the gaps and preparing for interviews

While this roadmap covers most bases, there might be some areas that you feel you need to dive deeper into. By now you likely know which learning methods are most effective for you. Use those and search for more materials that will cover these gaps.

There are also some important topics that were not covered in Full Stack Open and other materials, such as relational databases, which are different from document-based databases such as MongoDB. **PostgreSQL is one of the most popular relational databases** and [postgresqltutorial.com](https://postgresqltutorial.com/) is a great resource that covers all the key concepts in sections 1-17. Once you finish this tutorial, use PostgreSQL in your next personal project. Try not to avoid an ORM (object relation mapper) at the beginning and instead stay as close as possible to the SQL queries by using something like [node-postgres](https://node-postgres.com/).

**If you're starting to prepare for interviews, go through all your notes collected along the journey, study them to see how well you retained those concepts, keep reviewing to fill the gaps.** Depending on the type of companies you will target, you might want to practice algorithms and data structures as they do come up in the interviews, especially with the bigger tech companies. But this is a whole different topic and there's some other amazing resources out there that you might want to check out.

If you made it this far, you're in a great place. Your skills are very sought after in the market and you shouldn't have too much trouble finding a good job in the industry or problem space that you're after. Keep learning and sharing the knowledge with others that might be earlier along their journey!
