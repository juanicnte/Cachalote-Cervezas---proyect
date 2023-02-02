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

app.get("/AAA", function(req,res){
    return res.render("aaa.ejs");
});

app.get("/doradaPampeana", function(req,res){
    return res.render("dorada.ejs");
});

app.get("/goldenALE", function(req,res){
    return res.render("golden.ejs");
});

app.get("/honey", function(req,res){
    return res.render("honey.ejs");
});

app.get("/americanIPA", function(req,res){
    return res.render("a-IPA.ejs");
});

app.get("/porter", function(req,res){
    return res.render("porter.ejs");
});

app.get("/sessionIPA", function(req,res){
    return res.render("s-IPA.ejs");
});

app.get("/scottishExport", function(req,res){
    return res.render("scottish.ejs");
});

app.get("/NuestrasCervezas", function(req,res){
    return res.render("all-beers.ejs");
});

app.get("/paginaEnConstruccion", function(req,res){
    return res.render("paginaEnConstruccion.ejs");
});
