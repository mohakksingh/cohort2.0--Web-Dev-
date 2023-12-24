//map,filter,arrow fns

function sum1(a,b){
    return a+b;
}

const sum=(a,b)=>{
    return a+b;
}


const ans=sum(1,2);
console.log(ans);

//given an array,give me back an array which is multi by 2
//[1,2,3,4,5]
//[2,4,6,8,10]

const input=[1,2,3,4,5];
// //soution

// const newArray=[];

// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i]*2);
    
// }

// console.log(newArray);

//other sol
function transform(i){
    return i*2
}

const ajs=input.map(transform)
console.log(ajs);

const sol1=input.map(function(i){
    return i*2;
});
console.log(ans);