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

 mongoose.connect('mongodb://localhost:27017/products');

 router.use(function(req,res,next){


     // do logging 
    // do authentication 

console.log("Logging of request will be done here");
next();

 });

 //save the data
router.route('/products').post(function(req,res){

    var p = new product();
    for(var i=0; i<req.body.length;i++){
     p.title=req.body[i].title;
     p.price=req.body[i].price;
     p.instock=req.body[i].instock;
     p.photo=req.body[i].photo;

     p.save(function(err){

        if(err)
        {
            res.send(err)
        }

        res.send({message:"Product Saved"});
     })
    }
});

router.route('/products').get(function(req,res){

    product.find(function(err,products){
       
        if(err){
            res.send(err)
        }

        res.send(products);

    });

});

/*
Use cors and assign base url,listen to port and start server
 */

app.use(cors());
app.use("/api",router);

app.listen(port);

console.log("The server is started",+port);
