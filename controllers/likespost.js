const Like = require("../models/likesshema");
const Post = require("../models/postschema")

exports.Generatelike = async(req , res)=>{
    try{
        const {post , user} = req.body;

        const newlike = new Like({post , user});

        const savedLike = await newlike.save();

        const updatedpost = await Post.findByIdAndUpdate(post , 
            {$push : {likes:savedLike._id}},
            {new:true}).populate("likes").exec();
            

            res.status(200).json({
                success : true,
                post:updatedpost,
                message:"likes submitted successfully"});

            
       }
       catch(err){
        res.status(500).json({
            success : false,
            message:"likes falied to  submit ",
            error : err.message
        });
       }
};