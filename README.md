This is an Official AIKI webpage, made by their owners. 
Project uses [Next.js](https://nextjs.org/).

## Getting Started

 - First, download [Node.js](https://nodejs.org/en/)

 - Open the folder you want to work in, run terminal and clone repo:

    `$ git clone https://github.com/akai-org/akai-webpage.git`
    
 - Enter to this directory project `C:/../../aiki-webpage`

 - Install packages:
 
    `$ npm install`

## Commands

**Start developing.**

Navigate into your new site’s directory and start it up.

`$ npm run dev`

Now your site is now running at `http://localhost:3000`!

**Build production**

`$ npm run build`

To change build name, enter to `package.json` and change name after `-o` (default is `out`). 
`next export ` works only for SSG !:

    {
        ...
        "scripts": {
            "build": "next build && next export -o build",
            ...,
        },
        ...
    },

## What's inside?

A quick look at the top-level files and directories you'll see in a Next.js project.

    .
    ├── config
    ├── node_modules
    ├── public
    ├── src
    ├── .env
    ├── .gitignore
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    └── README.md

- **`/config`**: This file has global informations about aplication. 

- **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

- **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

- **`/public`**: This directory will contain all static files.

- **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

- **`next.config.js`**: This is the main configuration file for a Next.js site. This is where you can specify information about your build, PWA, scripts and serverless.

- **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

- **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

- **`README.md`**: A text file containing useful reference information about your project.