const express = require('express');

const app = express();

require('dotenv').config();//give process.env object

// console.log(process.env)

const PORT = process.env.PORT || 4999;


// // middleware to parse json request body
app.use(express.json());

// // imports routes for todo api
const todoRoutes= require('./routes/todos')

// // mount the todo api routes
app.use('/api/v1', todoRoutes)




app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})



// // connection to database

const dbConnect =require('./config/database');
dbConnect();

app.get('/', (req, res)=>{
    res.send(`<h1> Home Page Baby</h1>`)
})





