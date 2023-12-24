//male members name in a given complex object

const allUsers=[{
    firstname:"harkirat",
    gender:"male"
},
{
    firstname:"raman",
    gender:"male",
    metadata:{
        age:21,
        address:""
    }
},{
    firstname:"Priya",
gender:"female"
}]

for (let i = 0; i < allUsers.length; i++) {
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstname"]);
    }
    
}