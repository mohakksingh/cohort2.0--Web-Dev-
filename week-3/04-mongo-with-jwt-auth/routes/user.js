const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const { Course } = require("../../03-mongo/db");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username=req.headers.username
    const password=req.headers.password

    await User.create({
        username,
        password
    })
    res.json({
        message:"User created succesfully"
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.headers.username
    const password=req.headers.password

    const user=await User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message:"incorrect email and password"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({})
    res.json({
        response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.username;
    const courseId=req.params.courseId;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"Purchase completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=await User.findOne({
        username:req.headers.username
    })
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })

});

module.exports = router