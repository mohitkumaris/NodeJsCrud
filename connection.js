
var mongoose=require("mongoose");

var connect= mongoose.connect('mongodb://192.168.108.181:27017/products');

module.exports=connect;