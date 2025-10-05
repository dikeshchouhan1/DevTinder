const express =require("express")

const { userAuth } = require("../middlewares/auth");
const requestRouter=express.Router();

requestRouter.post("/sendConnectionRequest",userAuth,async(req,res)=>{
  const user=req.user;
  console.log("sending a connnection request")
  res.send(user.firstName   +"   connection Request send")
})


module.exports=requestRouter;