
require('dotenv').config();
const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    port = 8081,
    errorHandler = require("./handlers/error"),
    authRoutes = require("./routes/auth"),
    messagesRoutes = require("./routes/messages"),
    {ensureCorrectUser,loginRequired} = require("./middleware/auth"),
    db  = require('./models');


app.use(cors());
app.use(bodyParser.json());


app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages",
loginRequired,
ensureCorrectUser,
messagesRoutes);

app.get("/api/messages",loginRequired,async function(req,res,next){
    try{
        let messages = await db.Message.find().sort({createdAt:"desc"})
        .populate("user",{
            username:true,
            profileImgUrl:true
        });
        return res.status(200).json(messages);
    }
    catch(err){
        return next(err);
    }
})

app.use(function (req, res, next) {
    let error = new Error("not found");
    error.status = 404;
    next(error);
});

app.use(errorHandler);
app.listen(port, function () {
    console.log(`server has started on port ${port}`);
})
