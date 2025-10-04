const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    minLength:4,
    maxLength:50,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,

  },
  password: {
    type: String,

    require:true,
  },
  age:{
    type:Number,
    min:18
  },
  gender:{
    type:String,
    validate(value){
      if(!['maile','female','other'].includes(value)){
        throw new Error("Gender data is not valid")
      }
    }
  
  }
  ,
  photoUrl:{
    type:String,
    default:"this is a default about of the user!"

  },
  skills:{
    type:[String]
  }
  
},{
  timestamps:true
});
const userModel=mongoose.model("User",userSchema);

module.exports=userModel;
