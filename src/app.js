const express = require("express");
const connectDB = require("./config/database");
const app = express();



const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());

const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile");
const requestRouter=require("./routes/request")

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);


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
