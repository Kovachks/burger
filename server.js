var express = require("express");
var bodyParser = require("body-parser");;
var methodOverride = require("method-override");

var port = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(medhodOverride("_method"));

