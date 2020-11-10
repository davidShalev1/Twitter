const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async function (req, res, next) {
  try {
    const user = await db.User.create(req.body);
    let { id, username, profileImgUrl } = user;
    let token = jwt.sign({
      id,
      username,
      profileImgUrl
    },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImgUrl,
      token
    });

  }
  catch (err) {
    if (err.code === 11000) {
      err.message = "that username or/and email have already taken";
    }
    return next({
      status: 400,
      message: err.message
    })
  }
}

exports.signin = async function signin(req,res,next){
    try{
       const user = await db.User.findOne({
         email:req.body.email
       });
       let {id,username,profileImgUrl} = user;
       isMatch = await user.comparePassword(req.body.password);
       if(isMatch){
         let token = jwt.sign({
           id,
           username,
           profileImgUrl
         },
         process.env.SECRET_KEY
         );
        return res.status(200).json({
            token,
            id,
            username,
            profileImgUrl
         });
       }
       else{
        return next({
          status:400,
          message:"invalid email/password"
        })
       }
    }
    catch(err){
      return next({
        status:400,
        message:"invalid email/password"
      })
    }
}