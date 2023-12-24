const fs=require('fs');

function putCopyrightToFile(cb){
    fs.readFile("a.text","utf-8",function(err,data){
        data=data+"copy"
    })
}