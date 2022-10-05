# Exercise-6-Web-Development-Framework-Course-To-Do-Part-
Exercise 6 Web Development Framework Course.

Web Development Framework Exercise 5 (Calling Node from React)

-Additional Information:

Install npm i --save concurrently

Run by: npm run dev

Set in a package.json as in a script as below:

{
  "dependencies": {
    "colors": "^1.4.0",
    "concurrently": "^7.4.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.20"
  },
  "name": "todolist",
  "version": "1.0.0",
  "description": "todolist",
  "main": "server.js",
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "author": "Thong Dang",
  "license": "MIT"
}

