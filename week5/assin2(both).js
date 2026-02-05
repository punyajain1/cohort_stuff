const express = require("express");

const app = express();

let count = 0;//requests
function midd(req, res, next) {
    console.log("method: " + res.method);
    console.log("url is: " + req.hostname);
    console.log(new Date());
    count++;
    console.log("call number: " + count);//logging requests
    next();
}

app.use(midd);

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
});

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b,
    });
});

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b,
    });
});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b,
    });
});

app.listen(3000);
