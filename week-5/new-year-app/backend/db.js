//to create schema for our 
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://singhmohak999:MfltaQh6mQ81QBIH@cluster0.bcyym0p.mongodb.net/todos")//.env


const todoSchme=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchme)

module.exports={
    todo
}