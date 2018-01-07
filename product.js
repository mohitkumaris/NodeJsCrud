/**
 * Created by mohitkumar on 1/7/2018.
 */

var mongoose=require("mongoose");

var Schema=mongoose.Schema;

var ProductSchema = new Schema({
    title: String,
    price: Number,
    instock: Boolean,
    photo: String
   


});

/*
 title: String,
    price: Number,
    instock: Boolean,
    photo: String
*/
module.exports=mongoose.model("Product",ProductSchema);