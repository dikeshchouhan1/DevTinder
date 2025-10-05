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
      validate(value) {
        if (!["maile", "female", "other"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "this is a default about of the user!",
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
