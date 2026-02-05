import express from "express";
import mongoose from "mongoose";
import { BACKEND_URL } from "./config";
mongoose.connect(BACKEND_URL);
import jwt from "jsonwebtoken";
import {usermodel , contentmodel , tagmodel , linkmodel } from "./db";
import {key} from "./config";
import { auth } from "./middleware/admin";
import {random} from "./utils";
import cors from "cors";
import bcrypt from "bcrypt";
import {z} from "zod";


const app = express();
app.use(express.json());
app.use(cors())

//signup
app.post("/api/v1/signup", async (req, res) => {
    const us=z.object({
        email: z.string().email(),
        password: z.string()
    });
    try {
        const {email , password} = us.parse(req.body);
        const hasshedpass = await bcrypt.hash(password , 10);
        await usermodel.create({
            email: email,
            password: hasshedpass
        }) 
        res.json({
            message: "User signed up"
        })
    } catch(e) {
        res.status(411).json({
            //@ts-ignore
            message: e.message
        })
    }
});


//signin
app.post("/api/v1/signin", async (req, res) => {
    const us=z.object({
        email: z.string().email(),
        password: z.string()
    });
    const { email, password } = us.parse(req.body);
    const existingUser = await usermodel.findOne({email});
    try{
        if(!existingUser) {
            res.status(403).json({message: "Incorrrect credentials"});
        }else{
            const isvalid = await bcrypt.compare(password , existingUser.password as string);
            if(isvalid){
                const token = jwt.sign({id: existingUser._id}, key);
                res.json({token});
            }else{
                console.log("invalid password");
            }
        }
    }catch(err){
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


//creating a post
// @ts-ignore
app.post("/api/v1/content",auth, async (req, res) => {
    try{
        const { link , type , title } = req.body;
        await contentmodel.create({
            link: link,
            type: type,
            title: title,
            // @ts-ignore
            userId: req.userId,
            tags: []
    })
    res.json({message: "Content added"})
    }catch(e){
        // @ts-ignore
        res.status(500).json({msg: e.message});
    }
    
});



//display content
//@ts-ignore
app.get("/api/v1/content", auth, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await contentmodel.find({
        userId: userId
    }).populate("userId", "email")
    res.json({
        content
    })
})



//deleting content
// @ts-ignore
app.delete("/api/v1/content:id", auth, async (req, res) => {
    try{
        const contentId = req.params.id;
        await contentmodel.deleteMany({
            contentId,
            // @ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Deleted"
        })
    }catch(e){
        //@ts-ignore
        res.status(401).json({error: e.message});
    }
})



//sharing content
// @ts-ignore
app.post("/api/v1/brain/share", auth, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await linkmodel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await linkmodel.create({
            //@ts-ignore           
            userId: req.userId,
            hash: hash
        })
        res.json({
            hash
        })
    } else {
        await linkmodel.deleteOne({
        //@ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Removed link"
    })
}
});



//getting content for shared brain
//@ts-ignore
app.get("/api/v1/brain/:shareLink",auth, async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkmodel.findOne({hash})
    if(!link){
        res.status(400).json({msg:"sorry link wrong"})
        return;
    }
    const content = await contentmodel.find({
        userId:link.userId
    })
    const user = await usermodel.findOne({
        _id:link.userId
    })
    if(!user){
        res.status(400).json({msg:"user not found"})
        return;
    }

    res.json({
        username: user.email,
        content: content
    })

})
app.listen(3000);