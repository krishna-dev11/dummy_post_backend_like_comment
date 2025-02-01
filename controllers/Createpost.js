const posts = require("../models/postschema");

exports.Createpost = async(req , res)=>{

    try{
    const {title , description , user  } = req.body;

    const updatedpost = await posts.create({title, description, user});


    res.status(200).json({
        success : true,
        data:updatedpost,
        message:"post submitted successfully"
    });
    }
    catch(err){
        res.status(500).json({
            success : false,
            message:"post falied to  submit "
        })
    } 

}

