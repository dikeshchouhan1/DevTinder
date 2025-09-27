const express=require('express')

const app=express()
const {adminAuth,userAuth}=require('./middlewares/auth')

app.use("/admin",adminAuth)
// app.use("/user",userAuth)

app.get('/user',userAuth,(req,res)=>{
    res.send("user Data send")
})
app.get('/admin/getAllData',(req,res)=>{
    res.send("All Data send")
})
app.get('/admin/deleteUser',(req,res)=>{
    res.send("user data deleted")
})


app.listen(9000,()=>{
    console.log("server is listen port 9000")
})