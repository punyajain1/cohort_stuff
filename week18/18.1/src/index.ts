import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();



app.get("/user" , async function(req,res){
    const user = await client.user.findMany();
    res.json({
        user : user
    })
})


app.get("/user:id" ,async function(req,res){
    const id = Number (req.params.id);
    const user = await client.user.findFirst({
        where:{
            id : id
        } , select:{
                todos: true
        }
    });
    res.json({
        user : user
    })
})


app.listen(3000)