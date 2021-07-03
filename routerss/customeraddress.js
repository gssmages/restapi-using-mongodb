var express = require('express')
var router = express.Router()
const custaddress = require('../models/customeraddresslist')

router.get('/', async(req,res) => {
    try{
       const customeraddresslist = await custaddress.find()
       res.json(customeraddresslist)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
       const customeraddresslist = await custaddress.findById(req.params.id)
       res.json(customeraddresslist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/custid/:custid', async(req,res) => {
    try{
       const customeraddresslist = await custaddress.find({custid: req.params.custid})
       res.json(customeraddresslist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => {
    const custaddresssave = new custaddress({
        custid: req.body.custid,
        location: req.body.location,
        doorno:req.body.doorno,
        address1:req.body.address1,
        address2:req.body.address2,
        area:req.body.area,
        geolatlang: req.body.geolatlang     
    })

    try{
        const custaddsave =  await custaddresssave.save() 
        res.json(custaddsave)
    }catch(err){
        res.send('Error ' + err)
    }
})
module.exports = router