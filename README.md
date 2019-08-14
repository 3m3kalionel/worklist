# WorkList


## Introduction

*  **`Worklist`** is a web application that is powered by GraphQL Yoga/Prisma(database) on the backend and Apollo Client/Next.js on the client. It's built to enable users create and share todo lists.


## Current Features

*  It has the following features;
  *  Allows users to:
  		*  Sign up / Sign in
  		*  Logout when already signed in
  		*  Password Reset via email
  		*  Create TodoLists marking tasks as completed during creation


## Features to be added
The following are features that will be added to the project:
- Adding `Labels` to todo lists
- Adding `Contributors` to todolists
- Colours for todo lists
- Due dates for todo lists
- Search functionality for todo lists by color, title, contributors, authors or todo content
- Editing todo lists



## Technologies

### Server
*  **[Prisma](https://www.prisma.io)** - Helps bridge the gap between database and GraphQL resolvers. It replaces traditional ORMs and makes it easy to implement resilient, production-ready GraphQL servers.


*  **[GraphQL Yoga](https://github.com/prisma/graphql-yoga)** - A-featured GraphQL Server with focus on easy setup, performance & great developer experience. It includes subscriptions and is compatible with all GraphQL clients.


### Client
*  **[Apollo Client](https://www.apollographql.com/docs/react/)** - A state management library for JavaScript apps. It handles requests and data caching, as well as UI updates
*  **[Next.js](https://nextjs.org)** - A React.js framework that provides features like server-rendering, static exports, CSS in JS etc.


## Installation and setup
*  Clone this repository using your terminal:
    >`https://github.com/3m3kalionel/worklist`

*  Navigate to the repo's folder on your computer
  	>  `cd worklist`
  *  On one terminal, navigate to the server directory
	   > `cd server`
* Create a .env file in the root of the `server` directory using the format in the provided .env.example file.
*  Install the app's dependencies using `npm` or yarn (ensure you have node installed on your computer)
	> `npm install` or `yarn install	`
* Start the server 	 
  >  run `npm run dev`
* On another terminal, navigate to the client directory
	> `cd client`
*   Install the apps's client directory's dependencies using npm or yarn
	> `npm install` or `yarn install`
* Start the client
	>`npm run dev`

* Open `http://localhost:7777/` in your browser and you are ready to use the app


## Contributing to the Project
**Contributions are welcome.**
* Fork this repository [here](https://github.com/3m3kalionel/worklist)
* Clone to your local environment
* Create a branch on a feature you want to work on
* Commit your changes: `git commit -m "new stuff added"`
* Push to the remote branch: `git push origin proposed-feature`
* Open a pull request against the develop branch
* Be descriptive about your contributions so other contributors can easily understand what you've done

## Limitations
* Features listed under `Features to be added` will address current app limitations


## License
This project is available for use and modification under the MIT License. See the LICENSE file for more details.
