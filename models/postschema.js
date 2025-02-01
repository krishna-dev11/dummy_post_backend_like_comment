const mongoose = require("mongoose");

const postschema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"likes"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }]



})

module.exports = mongoose.model("posts" , postschema);


