const comment  = require("../models/comments");
const Post = require("../models/postschema");


exports.Createcomment = async(req , res)=>{

    try{
    const {post , user , content } = req.body;

    const newcomment = new comment({post , user , content});

    const savedcomment = await newcomment.save();
 //postschema me dalo
    const updatedpost =  await Post.findByIdAndUpdate(post,
        {$push :{comments:savedcomment._id}},
        {new:true}).populate("comments").exec();


    res.status(200).json({
        success : true,
        post:updatedpost,
        message:"comment submitted successfully"
    });
    }
    catch(err){
        res.status(500).json({
            success : false,
            message:"comments falied to  submit ",
            error : err.message
        })
    } 

}

