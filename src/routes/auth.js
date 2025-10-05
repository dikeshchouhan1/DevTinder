const express =require('express');
const { valiidateSignUpDate } = require("../utils/vaildation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const authRouter=express.Router();


authRouter.post("/singup", async (req, res) => {
  try {
    valiidateSignUpDate(req);

    const { firstName, lastName, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.send("user is created");
  } catch (err) {
    res.status(400).send("ERROR :" + err.message);
  }
});


authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordVaild = await user.validatePassword(password)
    if (isPasswordVaild) {
      // Create a JWt token
      const token = await user.getJWT();
 

      // add the token to cookie and send the responce back to the user
      res.cookie("token", token,{
        expires:new Date(Date.now()+1*3600000)
      });
      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

authRouter.post("/logout", async(req,res)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
    })
     res.send("Logout Successfull")
})

module.exports=authRouter