const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { valiidateSignUpDate } = require("./utils/vaildation");
const bcrypt=require("bcrypt")
app.use(express.json());

app.post("/singup", async (req, res) => {
  try {
    valiidateSignUpDate(req);

     const {firstName,lastName,email,password}=req.body;

     const passwordHash=await bcrypt.hash(password,10);
     console.log(passwordHash)



    const user = new User(
        {
            firstName,lastName,email,password:passwordHash,
        }
    );

    await user.save();
    res.send("user is created");
  } catch (err) {
    res.status(400).send("ERROR :"+ err.message);
  }
});



app.post("/login" ,async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user= await User.findOne({email:email})
        if(!user){
            throw new Error("Invalid Credentials")

        }
        const isPasswordVaild= await bcrypt.compare(password,user.password)
        if(isPasswordVaild){
            res.send("Login Successfull")
        }
        else{
            throw new Error("Invalid Credentials")
        }
    }
    catch(err){
        res.status(400).send("ERROR:"+ err.message)
    }

})







app.get("/user", async (req, res) => {
  try {
    const user = await User.find({ firstName: req.body.firstName });
    if (user.length === 0) {
      return res.status(404).send("user is not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("user is not found", err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send("user is deleted");
  } catch (err) {
    res.status(400).send("user is not deleted", err);
  }
});

app.get("/feeds", async (req, res) => {
  try {
    const feeds = await User.find({});
    res.send(feeds);
  } catch (err) {
    res.status(400).send("feeds is not found", err);
  }
});

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
