const db = require("../models");

exports.createMessage = async function(req,res,next){
    try{
        let message = await db.Message.create({
            text:req.body.text,
            user:req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.messages.push(message.id);
        await foundUser.save();
        let foundMessage = await db.Message.findById(message.id).populate("user",{
            profileImgUrl:true,
            username:true
        });
        return res.status(200).json(foundMessage);
    }
    catch(err){
        next(err);
    }
}

exports.getMessage = async function(req,res,next){
    try{
        let message = await db.Message.findById(req.params.message_id);
        console.log(message);
        return res.status(200).json(message);
    }
    catch(err){
        next(err);
    }  
}

exports.deleteMessage = async function(req,res,next){
    try{
        let message = await db.Message.findById(req.params.message_id);        
        await message.remove();
        return res.status(200).json(message);
    }
    catch(err){
        next(err);
    }
}