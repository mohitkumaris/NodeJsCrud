/**
 * Created by mohitkumar on 1/7/2018.
 */

var mongoose=require("mongoose");
var cors=require("cors");
var bodyParser=require("body-parser");
var express=require("express");

var product=require("./product");

var app=express();

/*
 create route, assign port, and use body parser to parse incoming JSON data.
 */
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

var port=process.env.PORT || 8090;

var router=express.Router();

/*
Use cors and assign base url,listen to port and start server
 */

app.use(cors());
app.use("/api",router);

app.listen(port);

console.log("The server is started",+port);
