
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
   var productsData=[];
   for(var i=0; i<req.body.length;i++){
    p.title=req.body[i].title;
    p.price=req.body[i].price;
    p.instock=req.body[i].instock;
    p.photo=req.body[i].photo;
    productsData.push(p);
   }

    p.save(function(err){

       if(err)
       {
           res.send(err)
       }

       res.send({message:"Product Saved"});
    })
  
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

//find by id

router.route('/products/:product_id').get(function(req,res){

product.findById(req.params.product_id,function(err,products){

if(err){

    res.send(err)
}

res.send(products);
});

});


// update product

router.route('/products/:product_id').put(function(req,res){

product.findById(req.params.product_id,function(err,prod){

    if(err){

        res.send(err)
    }

    prod.title=req.body.title;
    prod.price=req.body.price;
    prod.instock=req.body.instock;
    prod.photo=req.body.photo;

    prod.save(function(err){

        if(err){

            res.send(err)
        }

        res.json({message:'Product Updated !!'});
    })
})

});



// delete

router.route('/products/:product_id').delete(function(req,res){

    


        product.remove({_id:req.params.product_id},function(err,prod){
            if(err){

                res.send(err)
            }

            res.json({message:'Product Removed !!'})


        })
    
});
    
module.exports=router;