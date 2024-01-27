const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://singhmohak999:TxoqcYY1OK3QqFuD@cluster1.1hgatql.mongodb.net/paytm");

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
})
const User=mongoose.model('User',userSchema);

module.exports={
    User
};

