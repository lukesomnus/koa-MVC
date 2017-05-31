# Koa MVC
## Introduction
A Nodejs MVC framework based on koa, koa-router, passport, squelize, mysql2 with Restful APIs.
## Getting Started
```
git clone https://github.com/lukesomnus/koa-MVC.git
npm install
npm run start
```
## Project Structure
```
├── app.js               // main file, including using kinds of middlewares
├── auth.js              // basic local auth
├── index.js             // entry file
├── package.json
├── router.js            // restful router
└── src
    ├── config
    │   ├── dbConfig.js             // datebase config data(user,password,etc)
    │   └── errorCode.js            // response error code
    ├── controller                  // control logic
    │   ├── TodoController.js   
    │   └── UserController.js
    ├── data   // define data model
    │   ├── model                   // sequelize data model
    │   │   ├── Todo.js   
    │   │   └── User.js
    │   └── sequelize.js            // initial squelize object and connect to mysql
    ├── service                     // access to data
    │   ├── TodoService.js
    │   └── UserService.js
    ├── util 
    │   └── handleResponse.js  
    └── view  
        ├── app.html
        └── login.html               // test login auth
```

## License
MIT