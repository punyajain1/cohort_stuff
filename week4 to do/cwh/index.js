const express = require("express");
const path = require("path");
const app= express();


app.use(express.static(path.join(__dirname,"static")));
app.use("/",require(path.join(__dirname,'route/blog.js')));

app.get("/hello/:name",function(req,res){
    res.send("hello " + req.params.name);
})


app.listen(3000);