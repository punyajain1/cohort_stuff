const express = require("express");
const path = require("path");
const app= express();
function isoldmidd(req, res , next){
    
}

app.get("/hello/:name",function(req,res){
    res.send("hello " + req.params.name);
})

app.listen(3000);