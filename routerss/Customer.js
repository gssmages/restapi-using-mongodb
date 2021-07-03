var express = require('express')
var router = express.Router()
const customers = require('../models/customerlist')

router.get('/', async(req,res) => {
    try{
       const customerlist = await customers.find()
       res.json(customerlist)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
       const customerlist = await customers.findById(req.params.id)
       res.json(customerlist)
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
       const customerlist = await customers.find(query)
       res.json(customerlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/checkmobile', async(req,res) => {
    try{
        var query = {}
if(req.body.mobile) {  
  query = {mobile:{$regex: req.body.mobile, $options: 'i'}}
}
       const customerlist = await customers.find(query)
       res.json(customerlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => {
    const custsave = new customers({       
        name: req.body.name,
        mobile: req.body.mobile,
        email:req.body.email,        
        password:req.body.password,
       /*  
        location: req.body.location,
        doorno:req.body.doorno,
        address1:req.body.address1,
        address2:req.body.address2,
        area:req.body.area,
        geolatlang: req.body.geolatlang    */  
    })

    try{
        const customersave =  await custsave.save() 
        res.json(customersave)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.patch('/update/:id',async(req,res)=> {
    try{
        const customerlist = await customers.findById(req.params.id) 
        customerlist.name =  req.body.name,
        customerlist.mobile = req.body.mobile,
        customerlist.email = req.body.email,   
        customerlist.password = req.body.password
        const custupdate = await customerlist.save()
        res.json(custupdate)   
    }catch(err){
        res.send('Error')
    }

})
module.exports = router