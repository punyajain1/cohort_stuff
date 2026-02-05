import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_BW5hysMc7AGD@ep-patient-night-a8qnvnhh-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");



app.post("/insert",async (req,res)=>{
    await pgClient.connect();
    const {username,email,password,city,country,street,pincode} = req.body;
    const query1 = `INSERT INTO users (username , email ,password) VALUES($1 , $2 ,$3) RETURNING id;`;
    const values = [username , email , password];
    const user = await pgClient.query(query1 , values);
    const query2 = `INSERT INTO addresses (user_id ,city , country , street , pincode) VALUES($1 , $2 , $3 , $4 , $5);`
    const values2 = [user.rows[0].id ,city, country, street, pincode];
    await pgClient.query(query2 , values2);
    const response = await pgClient.query("SELECT * FROM users;");
    res.json({response:response.rows});
    pgClient.end();
});

app.get("/get",async(req,res)=>{
    await pgClient.connect();
    const response = await pgClient.query(`SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;`);
    res.json(response.rows);
    pgClient.end();
});



app.listen(3000);
