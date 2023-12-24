
const express = require('express')
const bodyParser=require("body-parser")
const port = 3000
const app=express();

//fs.readFile("path","utf-8",())
//for(let)
//reading for files
//http module
//create a todo app that lets users store todos on the server
//try to create a http server from scratch in C
//create an http server in rust using actix-web
//create an http server in goland using the gurrila framework

//middleware
app.use(bodyParser.json());
app.post('/', (req, res) => {
    //db call
  res.send('Hello World!')
})

//fetch
//setTimeout        


app.listen(port,()=>{

});