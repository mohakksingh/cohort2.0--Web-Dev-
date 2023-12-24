//filtering
//give even values

const arr=['harkirat','raman','prash'];

const ans=arr.filter( (n)=>{
    if(n.startsWith("h")){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans);