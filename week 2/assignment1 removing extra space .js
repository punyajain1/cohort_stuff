const fs = require("fs");
function cleanFile(filepath,filepath2, cb){
    fs.readFile(filepath,"utf-8",function(err,data){
        data = data.replace(/\s+/g, ' ').trim();// remove extra spaces from in btw also
        //data.trim() == remve extra spaces from baclk also
        fs.writeFile(filepath2, data , function() {
            cb();
        });
    });
}

function onDone() {
	console.log("file has been cleaned");
}
cleanFile("a.txt","b.txt", onDone);