var express = require('express')
var router = express.Router()
const admins = require('../models/adminmodal')

router.get('/', async(req,res) => {
    try{
       const adminlist = await admins.find()
       res.json(adminlist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
       const adminlist = await admins.findById(req.params.id)
       res.json(adminlist)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router