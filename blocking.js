const express=require("express");
const app=express();

app.get("/route1",(req,res)=>{

    for(let i=0;i<10000000;i++){
        console.log("Blocking it")
    }
    res.json({
       message:"Success"
    })
})



app.get("/route2",(req,res)=>{
    res.json({
       message:"Success"
    })
})


app.listen(8080,()=>{
    console.log(`Server Running om port 8080`)

})