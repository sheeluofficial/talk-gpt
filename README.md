# SportsMall E-Commerce Shopping App

---

<!-- ### ⚙️ &nbsp; Time Taken to Complete this Project : -->
<!-- <p align="center">
<a href="https://wakatime.com/badge/user/f7838f29-ea5b-42c9-a473-628c7d8bc934/project/bf69fe19-66f3-47fa-99e9-f9e2926856e5"><img src="https://wakatime.com/badge/user/f7838f29-ea5b-42c9-a473-628c7d8bc934/project/bf69fe19-66f3-47fa-99e9-f9e2926856e5.svg" alt="wakatime"></a> -->
<!-- </p> -->

## Introduction

---

Step into our cutting-edge chat platform, meticulously crafted with the powerful MERN (MongoDB, Express, React, Node.js) stack and integrated with OpenAI's Chat API. Engage in intelligent, natural conversations and experience the future of online communication. Our platform combines advanced technology and AI-driven interactions for a seamless and interactive chatting experience like chatGPT.

<!-- ## Demo

### Normal User Area

https://github.com/MehraDevesh2022/CricketWeapon-Store/assets/96515074/d8eb6147-aed7-42c5-8d1f-0afcf6d05689

### Admin Area
https://github.com/MehraDevesh2022/CricketWeapon-Store/assets/96515074/bfc07258-0a0a-4840-b277-25dceafb4795 -->

<!-- ## Dummy User Accounts

| Email (Normal User) | Password | Email (Admin)     | Password  |
| ------------------- | -------- | ----------------- | --------- |
| user2@gmail.com     | user1234 | admin@gmail.com   | admin@123 |
| user3@gmail.comm    | user1234 | admin01@gmail.com | user1234  | -->

## Tech Stack

![MongoDB](https://img.shields.io/badge/-MongoDB-green) ![Express](https://img.shields.io/badge/-Express-blue) ![React](https://img.shields.io/badge/-React-blue) ![Node.js](https://img.shields.io/badge/-Node.js-green) ![Material-UI](https://img.shields.io/badge/-Material--UI-blue) ![Mongoose](https://img.shields.io/badge/-Mongoose-green) ![CSS3](https://img.shields.io/badge/-CSS3-blue) ![Js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Project Configuration Guide

### Cloudinary Configuration

- Cloudinary is used for image management and hosting. Follow these steps to configure Cloudinary for your project.

  - Create a Cloudinary account [here](https://cloudinary.com/).
  - Create a new Cloudinary project.
  - Go to the dashboard and copy the cloud name, API key, and API secret.
  <!--

  ### Stripe Configuration

  - Stripe is used for payment processing. Follow these steps to configure Stripe for your project.
  - Create a Stripe account [here](https://stripe.com/).
  - Go to the dashboard and copy the publishable key and secret key. -->

    <!-- ### Nodemailer Configuration
  
    - Nodemailer is used for sending emails. Follow these steps to configure Nodemailer for your project.
    - Create a Gmail account [here](https://mail.google.com/).
    - Go to the account settings and enable the Less Secure App Access.
    - Go to the dashboard and copy the email and password.
    - Go to .env file and save SMTP_MAIL and SMTP_PASS.
    - If you are using Gmail, you can directly copy the email and password. If you are using any other email service, you need to copy the SMTP host, port, and service.
    - Repl -->

  ### MongoDB Configuration

  - MongoDB is used for storing data. Follow these steps to configure MongoDB for your project.
  - Create a MongoDB account [here](https://www.mongodb.com/).
  - Create a new project and cluster.
  - Go to the dashboard and copy the connection string.
  - Go to .env file and save DB_LINK.

## Installation

1.  Clone the repository:
    ```bash
    git clonehttps://github.com/sheeluofficial/talk-gpt
    cd talk-gpt
    ```
2.  Install dependencies:
    ```bash
    cd backend
    npm install
    cd ..
    cd client
    npm install
    cd ..
    ```
3.  a `.env` file inside the `root` backend folder and add the following:


    ````bash
    PORT = 5000
    DB_URI ="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
    JWT_SECRET = <jwt-secret-key>
    CORS_ORIGIN = http://localhost:5174
    OPEN_AI_API_KEY = <openai chat apikey>
    OPEN_AI_ORGANIZATION = <openai organization id>
    JWT_SECRET = secret
    COOKIE_DOMAIN = localhost

    ````

4.  Run the app:

    ```bash
    cd backend
    npm start
    cd client
    npm run dev
    ```

    ## Features

### Normal User Mode

| Feature             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| User Authentication | OAuth with JWT for secure user login and registration        |
| OpenAi Chat      |  | Chat feature with Open AI api integration                    |

## Upcoming Features

### Normal User Mode

| Feature                 | Description                                            |
| ----------------------- | --------------------------------------------------     |
| Image generation        | Image generation through openAI image api              |
| Email Drafting Assistant| Email Drafting feature using openAI API                |
| Resume/CV Builder       | Build ATS friendly resume by providing user info and JD|

## Dependencies and Libraries

### Backend

| Dependency                              | Description                                           |
| --------------------------------------- | ----------------------------------------------------- |
| @babel/plugin-proposal-class-properties | Babel plugin for class properties                     |
| bcryptjs                                | Hash passwords before storing                         |
| body-parser                             | Parse incoming request bodies                         |
| cookie-parser                           | Parse Cookie header and populate req.cookies          |
| cors                                    | Enable Cross-Origin Resource Sharing 
| dotenv                                  | Load environment variables from a .env file           |
| express                                 | Web application framework for Node.js                 |
| jsonwebtoken                            | Generate and verify JSON Web Tokens                   |
| jwt-simple                              | Simple JWT encoding and decoding                      |
| mongoose                                | MongoDB object modeling tool                          |
| nodemon                                 | Monitor for changes in source code and restart server |
| validator                               | Validate and sanitize user input                      |

### Frontend

| Dependency                  | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| @emotion/react              | Emotion library for writing CSS with JavaScript              |
| @mui/material               | Material-UI components library                               |
| axios                       | Promise-based HTTP client for the browser and Node.js        |
| react                       | JavaScript library for building user interfaces              |
| react-hot-toast             | React component for customizable alerts                      |
| react-dom                   | Entry point to the React DOM library                         |
| react-router-dom            | Routing library for React applications                       |
| react-scripts               | Create React apps with no build configuration                |
| styled-components           | CSS-in-JS library for styling React components               |
| react-syntax-highlighter    | For highlighting code syntax                                 |
| react-type-animation        | Showing typing word animation                                |

## Hosting Your Complete App on Vercel

This guide will walk you through the process of hosting your complete MERN stack app on Vercel using the `vercel.json` configuration.

### Step 1: Prepare Your Project

- Organize your project with a root directory that contains both frontend and backend folders.
- Ensure both backend and frontend directories have all necessary code and dependencies.
- Create a `vercel.json` file in the root directory.
- Add the following code to `vercel.json`:

  ```json
  {
    "version": 2,
    "builds": [
      {
        "src": "./server/server.js",
        "use": "@vercel/node"
      },
      {
        "src": "./client/build",
        "use": "@vercel/static"
      }
    ],
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/server/server.js"
      }
    ]
  }
  ```

  - Note :
    - Using this configuration will require you to run npm run build in the frontend directory before deploying to Vercel.
    - Ensure your folder structure looks like this:
      ```json
        root
        ├── server
        ├── client
        │   ├── node_modules
        │   ├── package.json
        │   ├── build
        │   └── ...
        ├── node_modules
        ├── package.json
        ├── vercel.json
        └── ...
      ```

### Step 2: Push Code to GitHub

- Push all your code to GitHub, ignoring the `node_modules` folder and `.env` file.

### Step 3: Create a Vercel Account

- Create an account on Vercel if you haven't already.
- Connect your GitHub account to Vercel.

### Step 4: Create a Vercel Project

- Create a new project in Vercel.
- Select your GitHub repository (e.g., SportsMall).

### Step 5: Configure Project Settings

- Configure the project settings:
  - Keep the settings as they are.
  - Add all your `.env` variables in the Environment Variables section.

### Step 6: Deploy Your App

- Click on "Deploy" and wait for a few minutes for the deployment process to complete.

### Step 7: Visit Your App

- Once the deployment is successful, click on "Visit" to access your live app.

### Step 8: Enjoy Your App

- Congratulations! Your app is now live and accessible.

<!-- ## Contributions -->
