const express=require('express')

const app=express()

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({
        firstName:"dikesh",lastName:"Chouhan"
    })
})
app.listen(9000,()=>{
    console.log("server is listen port 9000")
})