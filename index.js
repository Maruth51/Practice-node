const express = require("express")

const app =express()

app.get("/",(req,res)=>{
    res.status(200).send("response recieved")
})

app.listen("5000",()=>{
    console.log("server started")
})