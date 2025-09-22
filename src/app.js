const express=require('express')

const app=express()
app.use("/",(req,res)=>{
    res.send("hello  from the dashbord")
})
app.use("/hello",(req,res)=>{
    res.send("hello hellow")
})
app.use("/dk",(req,res)=>{
    res.send("hello  from the server")
})
app.listen(9000,()=>{
    console.log("server is listen port 9000")
})