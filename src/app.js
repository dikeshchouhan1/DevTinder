const express=require('express')
const connectDB=require("./config/database")
const app=express()
const User=require("./models/user")


app.post("/singup", async(req,res)=>{
    
    const user=new User({
        firstName:"virat ",
        lastName:"kohli", 
        emailId:"virat 2@gmail.com",
        password:"dk123",
        age:21, 
    })
    try{

        await user.save();
        res.send("user is created")
    }
    catch(err){
        res.status(400).send("user is not created",err)
    }
})



connectDB().then(()=>{
    console.log("database is connected")
    app.listen(9000,()=>{
    console.log("server is listen port 9000")
})
}).catch((err)=>{
    console.log("database is not connected",err)
})


