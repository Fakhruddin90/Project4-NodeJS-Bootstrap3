// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

app.get("/calculator", function(req, res){
    var result = 0;
    res.render("calculator", {result: result});
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/calculator", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);    
    var result = num1 + num2;

    res.render("calculator", {result: result});
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});