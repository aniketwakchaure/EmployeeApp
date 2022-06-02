//Importing express libraries to create server
const express = require("express")

const app=express()

app.get("/user",(req,res)=>{
    res.send("First API Call")
})
const port=5000;

app.listen(port,(req,res)=>{
    console.log(`Starting Application on port no: ${port}`)
})