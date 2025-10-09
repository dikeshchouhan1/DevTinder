const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,

      require: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      enum:{
          values:["male","female","other"],
          message:`{values} is not a valid gender type`
      }
    },
    photoUrl: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVLdSDmgrZN7TkzbHJb8dD0_7ASUQuERL2A&s",
    },
    about:{
        type:String,
        default:"i am a stundent"
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getJWT = async function () {
  const user=this;
  const token = jwt.sign({ _id: user._id }, "DEV@Tinder$2002", {
    expiresIn: "1 d",
  });
  return token;
};

userSchema.methods.validatePassword=async function(passwordInputByUser){
  const user=this;
  const passwordHash=user.password;
   const isPasswordVaild=await bcrypt.compare(passwordInputByUser, passwordHash);
   return isPasswordVaild;
}


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
