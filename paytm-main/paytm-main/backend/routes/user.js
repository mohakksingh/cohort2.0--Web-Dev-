const express=require("express");
const zod=require('zod');
const JWT_SECRET = require("./config");
const jwt=require("jsonwebtoken");
const router=express.Router();


const signupSchema=zod.object({
    userame:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    password:zod.string()
})
router.post("/signup",async (req,res)=>{
    const body=req.body;
    const{success}=signupSchema.safeParse(req.body);
    if(!success){
        return req.json({
            message:"Email already taken/Incorrect inputs"
        })
    }
    const user=User.findOne({
        username: body.username
    })
    
    if(user._id){
        return res.json({
            message:"Email already taken/Incorrect inputs"
        })
    }

    const dbUser=await User.create(body);
    const token=jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)
    res.json({
        message:"User created succesfully",
        token:token     
    })
})





module.exports=router;