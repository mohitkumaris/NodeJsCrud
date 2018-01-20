
var express=require("express");



var router=express.Router();

var product=require("./product");

router.use(function(req,res,next){


    // do logging 
   // do authentication 

console.log("Logging of request will be done here");
next();

});

//save multiple data the data

  function SaveMultipleData(req, res) {
    {
         var productArray=[];
         productArray=req.body;

         for(var productData in productArray){

             new product(productArray[productData])
                 .save(function (err) {

                     if(err)
                     {
                         res.send(err)
                     }
                     res.send({message:"Products Saved"})
                 })
         }

    }
}


router.route('/products').post(SaveMultipleData);



//Get the data
router.route('/products').get((req,res)=>{

   product.find((err,products)=>{
      
       if(err){
           res.send(err)
       }

       res.send(products);

   });

});

//find by id

router.route('/products/:product_id').get((req,res)=>{

product.findById(req.params.product_id,(err,products)=>{

if(err){

    res.send(err)
}

res.send(products);
});

});


// update product

router.route('/products/:product_id').put((req,res)=>{

product.findById(req.params.product_id,(err,prod)=>{

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

router.route('/products/:product_id').delete((req,res)=>{

    


        product.remove({_id:req.params.product_id},(err,prod)=>{
            if(err){

                res.send(err)
            }

            res.json({message:'Product Removed !!'})


        })
    
});
    
module.exports=router;