# Koura

This is a clone of [Quora](https://www.quora.com/).

Koura is the place to ask any question with your hearts desire for some helpful and maybe not so helpful answers. 

# Index 
|[MVP Feature List](https://github.com/DavidPhamThinkful/React-Project/wiki/Features)|[Database Schema](https://github.com/DavidPhamThinkful/React-Project/wiki/Database-Schema)|
|[Frontend Routes](https://github.com/DavidPhamThinkful/React-Project/wiki/Frontend-Routes)| [API Documentation](https://github.com/DavidPhamThinkful/React-Project/wiki/API-Documentation)|


# Technologies Used
* Javascript
* React
* Redux
* Express
* PostgreSQL
* HTML5
* CSS
* Git

# Getting Started
1. Clone this repo
* `git clone https://github.com/DavidPhamThinkful/React-Project.git`

2. Install Frontend and Backend dependencies
* `cd frontend > npm install`
* `cd backend > npm install`

3. Create a .env file base on the .env.example given

4. Setup your username and database based on what you setup in your .env

5. Migrate and Seed models
* `npx dotenv sequelize db:migrate`
* `npx dotenv sequelize db:seed:all`

6. Start the services in the backend directory
* `npm start`

7. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.
* `npm start`

8. You can use the Demo user or create an account to begin when using Koura. 

# Features
Logged in users can perform the following actions
* `Create, Update, View, Delete questions`
* `Create, Update, View, Delete answers`
