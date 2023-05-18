const { fork } = require('child_process');
const express=require("express");

let {EventEmitter} = require('events');

let event = new EventEmitter();

const app=express();

app.get("/route1",(req,res)=>{
    const child=fork(`${__dirname}/expensivecaluclation.js`)

    child.on("message",(msg)=>{
        res.json({
            expensiveClaulation:msg,
            message:"Success"
         })
     
    }); 
    



  
})

app.listen(8080,()=>{
    console.log(`Server Running om port 8080`)

})


app.get("/route2",(req,res)=>{
    res.json({
       message:"Success"
    })
})





