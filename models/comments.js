const mongoose = require("mongoose");

const commentsschema = new mongoose.Schema({

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "posts"
    },
    user:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("comments",commentsschema)