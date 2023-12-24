const express=require("express")
const app=express();

function isOldEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}

function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.status(411).json({
            msg:"Sorry you are not of age yet   "
        })
    }

}
app.use(isOldEnoughMiddleware)
app.get("/ride2",function(req,res){
    res.json({
        msg:"You have successfully riden ride 2"
    })
})
app.get("/ride1",function(req,res){
    
    res.json({
        msg:"You have successfully riden ride 1"
    })
    
})

app.listen(3000)