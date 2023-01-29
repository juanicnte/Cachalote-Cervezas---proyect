const express = require('express');
const path = require ('path');
const app = express();
const { join } = require('path');
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)) 
app.listen(process.env.PORT || 3000, () => {
    console.log('servidor corriendo...');
});

app.set('views', join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});

app.get("/", function(req,res){
    return res.render("home.ejs");
});
