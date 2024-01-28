const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const {JWT_SECRET}=require("../config")
const jwt=require("jsonwebtoken")

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    username=req.body.username
    password=req.body.password

    await Admin.create({
        username,
        password
    })
    res.json({
        message:"Admin successfully created"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password

    const user=await User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message:"Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    title=req.body.title
    description=req.body.description
    price=req.body.price
    imageLink=req.body.imageLink

    await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        message:"Course created"
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
    res.json({
        response
    })
});

module.exports = router;