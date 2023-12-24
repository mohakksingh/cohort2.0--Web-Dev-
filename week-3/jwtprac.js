const jwt=require("jsonwebtoken");
//decode,verify,generate
const value={
    name:"harkirat",
    accountNumber:123123
}

//jwt
const token=jwt.sign(value,"secret");
console.log(token)
//tihs token has been generated using this secret,and this token can only be verified using this secret
//this is your checkbook
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhdCI6MTcwMzMzMTc1NH0.TsaYITuP0CY4yUrHOp8vcgYHrAY3pPoJoTciwvQTixs