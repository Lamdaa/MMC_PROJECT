
const http = require('node:http'); // built in package
const express = require('express'); // third party package

const app = express(); //create an express app object

//configure view engine
app.set('view engine','vash');
app.set('views','./views');

//configure the roots and middleware

//GET http://localhost:5000/
app.get("/",(req,res)=>{
    res.render('home',{
        title: 'HOme Page',
        username: 'Aditya'
    })
});

//GET http://localhost:5000/about
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
});

//GET http://localhost:5000/contact
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
});


const server = http.createServer(app);//create a server with express app

server.listen(5000,()=> {
    console.log('Server is running on port 5000');
})
