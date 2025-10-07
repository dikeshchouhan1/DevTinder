const mongoose=require("mongoose");

const connectionRequestSchema=new mongoose.Schema({
    fromUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",  //refence to the user collecton
        required:true,
    },
    toUserId:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"User", 
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum:{
            values:["ignored","interested" , "accepted" , "rejected"],
            message:`{values} in incorrect status type`
        }
    }
},{
    timestamps:true,
});

//compount index
connectionRequestSchema.index({ fromUserId:1,toUserId:1});

connectionRequestSchema.pre("save",function(next){
    const connectionRequest=this;
    // check if the fromsUserid is same as touserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("Cannot send connection request to yourself !!")
    }
    next();
})

const ConnectionRequestModel=new mongoose.model(
    "ConnectionRequest",
    connectionRequestSchema
);

module.exports=ConnectionRequestModel;