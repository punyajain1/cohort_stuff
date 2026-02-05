const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "USER_APP";
app.use(express.json());

const users = [];


function auth(req,res,next){
    const token = req.headers.token;
    if(token){
        jwt.verify(token, JWT_SECRET,function(err,decode) {
            if(err){
                req.status(401).send({
                    msg:"error"
                })
            }else{
                req.username = decode;
                next();
            }
        })
    }else{
        req.status(401).send({
            msg:"error"
        })
    }
}

function logger(req,res,next){
    console.log(req.method+`method is called`);
    next();
}



app.get("/", function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/signup",logger,function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password
    })
    res.json({
        msg: "you have signed up!!!!"
    })
});

app.post("/signin",logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);


    let foundUser = null;
    for (let i = 0; i<users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i]
        }
    }



    if (foundUser) {
        const token = jwt.sign({
            username: username,
            passward: password,
            firstname,
            lastName,
            courses: []
        }, JWT_SECRET);

        user.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});
app.get("/me", auth,logger,(req, res) => {
    const user = req.username;
    res.send({
        username: user.username
    })
})

app.listen(3000);