const jwt=require("jsonwebtoken")
const User=require("../models/user")
 const userAuth= async(req,res,next)=>{

    try{
         // Read the token fron the req.cookies
    const {token}=req.cookies;
    if(!token){
        throw new Error("Token is not vaild")
    }

    // validate the  token
    const decodeddata= await jwt.verify(token,"DEV@Tinder$2002")
    // find the user

    const {_id}= decodeddata;

    const user= await User.findById(_id)

    if(!user){
        throw new Error("User not found")
    }

    req.user=user;
     next()
  

    }
    catch(err){
        res.status(400).send("ERROR"+err.message)
    }
   
}

module.exports={userAuth}