const express = require("express");
const app = express();
app.use(express.json());
let todo=[];

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/addtodo', function (req, res) {
    const data = {
        "todo": req.body.todo,
        "id" : todo.length
    }
    todo.push(data);
    res.json({msg: "Todo added", data});
});


app.delete('/delete', function (req, res) {
    todo = [];
    res.json({msg: "todo deleted"});
});

app.delete('/delete', function (req, res) {
    const id = parseInt(req.query.id);
    if (id >= 0 && id < todo.length) {
        todo.splice(id, 1);
        res.json({msg: "Todo deleted", id});
    } else {
        res.status(400).json({msg: "Invalid ID"});
    }
});

app.listen(3000);
console.log("server is running on port 3000");