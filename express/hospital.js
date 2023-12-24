const express=require("express")

const app= express();

const users=[{
    name:"John",
    kidneys:[{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

//411
app.put("/",function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy=true;
        
    }
    res.json({});
})

//removing all the unhealty kidneys
app.delete("/",function(req,res){
    //you should return a 411
    //only if atleast one unhealthy kindey is there do this ,else return 411
    if(isThereAtLeastOneUnhealthyKidney()){
        const newKidney=[];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
        
    }
    users[0].kidneys=newKidney;
        res.json({msg:"Done"})
        
        
    }
    
    else{
        res.status(411).json({
            msg:"You have no bad kidneys"
        })
    }
    
})

function isThereAtLeastOneUnhealthyKidney(){
    let atLeastOneUnheatlyKidney=false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys.length){
            atLeastOneUnheatlyKidney=true
        }
        
    }
    return atLeastOneUnheatlyKidney;
}
app.listen(3000);