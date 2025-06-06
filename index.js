const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute=require('./routes/product.route.js');
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:fasle}));


app.use("/api/products",productRoute);








mongoose.connect("mongodb+srv://thoomabhisathwika:LRdicI73gwSBVvpu@backend.ihhfzn7.mongodb.net/?retryWrites=true&w=majority&appName=backend")
.then(() => {
    console.log("connected");
})
.catch(() =>{
    console.log("failed");
});

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

