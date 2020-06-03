//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("site");
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 2309;
}

app.listen(port, function(){
  console.log("Running");
});
