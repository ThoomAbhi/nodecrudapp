const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("Hello from nodejs");

});

app.get('/house',(req,res) => {
    res.send("Hello from housejs");

});

app.get('/housetwo',(req,res) => {
    res.send("Hello from housetwojs");

});

app.listen(3000, () => {
    console.log("running on port 3000");
});

