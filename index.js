//Importing express libraries to create server
const express = require("express")
const mongoose = require("mongoose")
const router=require("./routes/emproutes")

const app=express()
app.use('/emp',router)

app.get("/user",(req,res)=>{
    res.send("First API Call")
})
const port=5000;

app.listen(port,(req,res)=>{
    console.log(`Starting Application on port no:http://localhost: ${port}`)
})
const mongodburl="mongodb+srv://aniketdb:aniket0160@cluster1.ig5p0.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodburl)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err)
})