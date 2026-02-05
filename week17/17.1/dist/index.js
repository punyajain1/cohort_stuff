"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_BW5hysMc7AGD@ep-patient-night-a8qnvnhh-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
app.post("/insert", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield pgClient.connect();
    const { username, email, password, city, country, street, pincode } = req.body;
    const query1 = `INSERT INTO users (username , email ,password) VALUES($1 , $2 ,$3) RETURNING id;`;
    const values = [username, email, password];
    const user = yield pgClient.query(query1, values);
    const query2 = `INSERT INTO addresses (user_id ,city , country , street , pincode) VALUES($1 , $2 , $3 , $4 , $5);`;
    const values2 = [user.rows[0].id, city, country, street, pincode];
    yield pgClient.query(query2, values2);
    const response = yield pgClient.query("SELECT * FROM users;");
    res.json({ response: response.rows });
    pgClient.end();
}));
app.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield pgClient.connect();
    const response = yield pgClient.query(`SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;`);
    res.json(response.rows);
    pgClient.end();
}));
app.listen(3000);
