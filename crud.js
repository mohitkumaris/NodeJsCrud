
var express=require("express");

var router=express.Router();

var product=require("./product");

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

//Get the data
router.route('/products').get(function(req,res){

   product.find(function(err,products){
      
       if(err){
           res.send(err)
       }

       res.send(products);

   });

});

module.exports=router;