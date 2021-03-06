var express = require('express')
var router = express.Router()
const deliveryman = require('../models/deliverymanlist')

router.get('/', async(req,res) => {
    try{
       const delmanlist = await deliveryman.find()
       res.json(delmanlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
       const delmanlist = await deliveryman.findById(req.params.id)
       res.json(delmanlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/login', async(req,res) => {
    try{
        var query = {}
if(req.body.mobile) {
  query = {$and:[{mobile:{$regex: req.body.mobile, $options: 'i'}},{password:{$regex: req.body.password, $options: 'i'}}]}

}
       const delmanlist = await deliveryman.find(query)
       res.json(delmanlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => {
    const delmansave = new deliveryman({
        location: req.body.location,
        name: req.body.name,
        mobile: req.body.mobile,
        email:req.body.email,
        doorno:req.body.doorno,
        address1:req.body.address1,
        address2:req.body.address2,
        area:req.body.area,
        password:req.body.password,
        Active:req.body.Active     
    })

    try{
        const deliverymansave =  await delmansave.save() 
        res.json(deliverymansave)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.patch('/:id',async(req,res)=> {
    try{
        const delverymanlist = await deliveryman.findById(req.params.id) 
        delverymanlist.name = req.body.name,
        delverymanlist.mobile = req.body.mobile,
        delverymanlist.email = req.body.email,
        delverymanlist.doorno = req.body.doorno,
        delverymanlist.address1 = req.body.address1,
        delverymanlist.address2 = req.body.address2,
        delverymanlist.area = req.body.area,
        delverymanlist.location = req.body.location,
        delverymanlist.Active = req.body.Active,
        delverymanlist.password = req.body.password
        const delmanupdate = await delverymanlist.save()
        res.json(delmanupdate)   
    }catch(err){
        res.send('Error')
    }

})
module.exports = router