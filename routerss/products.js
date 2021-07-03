var express = require('express')
var router = express.Router()
const prodlist = require('../models/productlist')

router.get('/', async(req,res) => {
    try{
       const productlist = await prodlist.find({"Active":true})
       res.json(productlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
       const productlist = await prodlist.findById(req.params.id)
       res.json(productlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => {
    const prod = new prodlist({
        ProductName: req.body.ProductName,
        Expiry: req.body.Expiry,
        Qty: req.body.Qty,
        Price:req.body.Price,
        Active:req.body.Active,
        Unit:req.body.Unit,
        ProductImage:req.body.ProductImage
    })

    try{
        const prodsave =  await prod.save() 
        res.json(prodsave)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=> {
    try{
        const productlist = await prodlist.findById(req.params.id) 
        productlist.Active = req.body.Active
        const produpdate = await productlist.save()
        res.json(produpdate)   
    }catch(err){
        res.send('Error')
    }

})
module.exports = router