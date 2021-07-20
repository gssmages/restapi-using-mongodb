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
router.get('/custid/:custid', async(req,res) => {
    try{
       const orders = await orderlist.find({custid: req.params.custid})
       res.json(orders)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/deliverymanid/:deliverymanid', async(req,res) => {
    try{
       const orders = await orderlist.find({deliverymanid: req.params.deliverymanid, status:"InProgress"})
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
deliverymanname:req.body.deliverymanname,
address:req.body.address,
totalqty:req.body.totalqty,
totalamt:req.body.totalamt,
customername:req.body.customername
    })

    try{
        const ordersave =  await order.save() 
        res.json(ordersave)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/report', async(req,res) => {
    try{
        var query = {}
 var startdate = new Date(req.body.startdate);
 var enddate = new Date(req.body.enddate);
  //query = {orderdatetime: {$gte: new Date(2021, 6, 01), $lte: new Date(2021, 6, 15)}}
  query = {orderdatetime: {$gte: startdate, $lte: enddate}}
       const orders = await orderlist.find(query)
       res.json(orders)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=> {
    try{
        const orders = await orderlist.findById(req.params.id) 
        orders.deliverymanid = req.body.deliverymanid,
        orders.deliverymanname = req.body.deliverymanname
        const orderupdate = await orders.save()
        res.json(orderupdate)   
    }catch(err){
        res.send('Error'+ err)
    }
})
router.patch('/status/:id',async(req,res)=> {
    try{
        const orders = await orderlist.findById(req.params.id) 
        orders.status = req.body.status
        const orderupdate = await orders.save()
        res.json(orderupdate)   
    }catch(err){
        res.send('Error'+ err)
    }
})
module.exports = router