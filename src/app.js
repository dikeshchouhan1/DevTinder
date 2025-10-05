const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { valiidateSignUpDate } = require("./utils/vaildation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");
app.use(express.json());
app.use(cookieParser());

app.post("/singup", async (req, res) => {
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

app.post("/login", async (req, res) => {
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
      console.log(token);

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

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

app.post("/sendConnectionRequest",userAuth,async(req,res)=>{
  const user=req.user;
  console.log("sending a connnection request")
  res.send(user.firstName   +"   connection Request send")
})

connectDB()
  .then(() => {
    console.log("database is connected");
    app.listen(9000, () => {
      console.log("server is listen port 9000");
    });
  })
  .catch((err) => {
    console.log("database is not connected", err);
  });
