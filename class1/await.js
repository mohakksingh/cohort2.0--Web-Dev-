function mohakAsyncFunc(){
    let p= new Promise(function(resolve){
        resolve("hi there")
    });
    return p;
}

async function main(){
    const value=await mohakAsyncFunc();
    console.log(value);
}

main();