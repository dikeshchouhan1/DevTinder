const express = require("express");
const connectDB = require("./config/database");
const cors=require("cors")
const app = express();
const http = require("http");
const initializeSocket = require("./utils/socket");

const cookieParser = require("cookie-parser");

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());

const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile");
const requestRouter=require("./routes/request")
const userRouter=  require("./routes/user")

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);

const server = http.createServer(app);
initializeSocket(server);

connectDB()
  .then(() => {
    console.log("database is connected");
    server.listen(9000, () => {
      console.log("server is listen port 9000");
    });
  })
  .catch((err) => {
    console.log("database is not connected", err);
  });
