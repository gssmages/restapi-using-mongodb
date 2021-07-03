var express = require('express')
var router = express.Router()
const orderlist = require('../models/orderlist')

router.get('/', async(req,res) => {
    try{
       const orders = await orderlist.find();
       res.json(orders)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
       const orders = await orderlist.findById(req.params.id)
       res.json(orders)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => {

    const order = new orderlist({
orderid: req.body.orderid,
orderdatetime: new Date(),
custid: req.body.custid,
Products:req.body.Products,
status:req.body.status,
deliverymanid:req.body.deliverymanid,
address:req.body.address,
totalqty:req.body.totalqty,
customername:req.body.customername
    })

    try{
        const ordersave =  await order.save() 
        res.json(ordersave)
    }catch(err){
        res.send('Error ' + err)
    }
})
module.exports = router