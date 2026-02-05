// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//           return area;
//     }
    
//     paint() {
//              console.log("Painting with color "+(this.color));
//     }
    
//  }
 
//  const rect = new Rectangle(2, 4,"blue");
//  const area = rect.area();
//  console.log(area);
//  console.log(rect.paint());








// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('age'));




// // returns an object of promise class
// function setTimeoutPromisified(ms) { // ms = milisecond
//     return new Promise(resolve => setTimeout(resolve, ms));

//   }
  
// function callback() {
//     console.log("3 seconds have passed");
// }
  
// // setTimeoutPromisified(3000).then(callback);// another way of calling asynchronous function
// let p = setTimeoutPromisified(3000);
// console.log(p);



// function random(resolve){
//     setTimeout(resolve,3000);
// }

// let p = new Promise(random);// supposed to return something

// function callback(){
//     console.log("success");
// }

// p.then(callback);



//PROMISIFIED VERSION OF FS.READFILE

const fs = require("fs");


function readthefile(senddata){
    fs.readFile("a.txt","utf-8",function(err,data){
        senddata(data);
    })
}


function readfile(filename){
    return new Promise(readthefile);
}

const p = readfile();
function callback(content){
    console.log(content);
}

p.then(callback);




