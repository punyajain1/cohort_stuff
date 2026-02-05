/* function sum(a){
    if(a<=0){
        return 0;
    }
    return a+sum(a-1);
}
let a = sum(10);
console.log(a); */



const fs = require("fs");

function read(err,data){
    if(err){
        console.log("file not found!!");
    }
    else{
        console.log(data);
    }
}

fs.readFile("a.txt", "utf-8",read); // reading file asyncronously (best appreach)


fs.readFile("b.txt","utf-8",read); // reading file synchronously

console.log("done!");