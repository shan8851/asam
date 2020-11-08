import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    title: "Snippy",
    img: "/snippy.png",
    description:
      "A CRUD application using NextJS, FaunaDB to manage code snippets, styled with tailwind",
    tech: ["NextJS", "Tailwind", "FaunaDB"],
    repo: "https://github.com/shan5742/snippy",
    demo: "https://snippy.asamshan.dev/",
  },
  {
    id: uuidv4(),
    title: "Bookmarks",
    description:
      "Simple React application for keeping track of bookmarks. Authentication is provided by firebase. App also uses firestore to store and modify data. Routing is handled by Reach Router",
    tech: ["Gatsby", "React", "express"],
    repo: "https://github.com/shan5742/bookmarks",
    demo: "https://bookmarks.asamshan.dev",
  },
  {
    id: uuidv4(),
    title: "This website!",
    description: "My first time working with Vue, built with Gridsome",
    tech: ["Vue", "Gridsome", "Netlify"],
    repo: "https://github.com/shan5742/asam",
    demo: "https://asamshan.dev/",
  },
  {
    id: uuidv4(),
    title: "Task Manager - Backend",
    description:
      "This is complete backend solution for a task manager app built with node and express, using MongoDB for the database.",
    tech: ["Node", "Express", "API"],
    repo: "https://github.com/shan5742/node-task-manager",
    demo: "https://github.com/shan5742/node-task-manager",
  },
  {
    id: uuidv4(),
    title: "Task Manager - Frontend",
    description:
      "Frontend for my task mager backend application, built with Creat React App - Still a work in progress.",
    tech: ["React", "CRA", "CRUD"],
    repo: "https://github.com/shan5742/node-task-manager",
    demo: "https://github.com/shan5742/node-task-manager",
  },
  {
    id: uuidv4(),
    title: "NodeJS Weather App",
    description:
      "Express server to get weather forecast based on location, deployed using Heroku",
    tech: ["node", "heroku", "express"],
    repo: "https://github.com/shan5742/express-weather-app",
    demo: "https://shan-express-weather-app.herokuapp.com/",
  },

  {
    id: uuidv4(),
    title: "Nodes App",
    description:
      "CLI tool for taking notes. Using Yargs for our command line arguments and chalk for displaying useful information to the user.",
    tech: ["Node", "CLI", "Yargs"],
    repo: "https://github.com/shan5742/nodes-app",
    demo: "https://github.com/shan5742/nodes-app",
  },
  {
    id: uuidv4(),
    title: "RPSLS",
    description:
      "Rock Paper Scissors game built with vanilla JS, but modified to include Lizard and Spock to make the game more complex and fun..",
    tech: ["JS", "CSS"],
    repo: "https://github.com/shan5742/rpsls",
    demo: "https://shan5742.github.io/rpsls/",
  },
];
