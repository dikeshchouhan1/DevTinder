const mongoose=require('mongoose')


const connectDB= async()=>{
    await mongoose.connect(
"mongodb+srv://dikeshchouhan01:dk123@cluster0.xep28ss.mongodb.net/devtinder"
)

 }

module.exports=connectDB;


