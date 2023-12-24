const express= require("express");

const app= express();
function userMiddleware(req,res,next){
    if(username !="harkirat" || password !="pass"){
        res.status(403).json({
            msg:"Incorrect Inputs",
        });
    }else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    if(kidneyId !=1 && kidneyId !=2){
        res.status(403).json({
            msg:"Incorrect inputs",
        });
    }else{
        next();
    }
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(res,req){
    res.send("Your heart is healthy");
})

app.get("/kidney-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("Your kidney is healthy");
})

app.get("/health-checkup",userMiddleware,function(res,req){
    res.send("Your heart is healthy");
})



app.listen(3000);
