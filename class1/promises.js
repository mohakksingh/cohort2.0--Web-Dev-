const fs=require('fs');

function mohakReadFile(){
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("Before resolve");
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}
var a=mohakReadFile();
a.then(onDone);