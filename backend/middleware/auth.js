require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.loginRequired = function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded){
                return next();
            }
            else{
                return next({
                    status:401,
                    message:"you are not logged in,please login"
                })
            }
        });
    }
    catch(err){
        return next({
            status:401,
            message:"you are not logged in,please login"
        })
    }
}

exports.ensureCorrectUser = function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded && decoded.id === req.params.id){
                return next();
            }
            else{
                return next({
                    status:401,
                    message:"unauthorized"
                })
            }
        })
    }
    catch(err){
        return next({
            status:401,
            message:"unauthorized"
        })
    }
}