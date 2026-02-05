const express = require("express");
const {UserModel , TodoModel} = require("./db.js");
const jwt = require("jsonwebtoken"); 
const JWT_SECRET = "PUNYA";

const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://admin:VowyYnkBsv1ZGvQu@cluster0.vuzwp.mongodb.net/todo-app-database");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

app.post("/todo",auth,function(req,res){
    const usrid = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title: title,
        userId : usrid
    })
    res.json({
        msg:"todo created"
    })
});

app.get("/todos",auth,async function(req,res){
    const usrid = req.userId;

    const user = await TodoModel.find({
        usrid
    })
    res.json({
        user
    })
});

function auth(req, res, next) {
    const token = req.headers['token'];  // Or use req.header('token');
    
    if (!token) {
        return res.status(403).json({
            msg: "Token is required"
        });
    }

    try {
        const veri = jwt.verify(token, JWT_SECRET);
        req.userId = veri.id;
        next();
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});