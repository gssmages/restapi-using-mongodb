var express = require('express')
var router = express.Router()
const location = require('../models/locationlist')

router.get('/', async(req,res) => {
    try{
       const loclist = await location.find()
       res.json(loclist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
       const loclist = await location.findById(req.params.id)
       res.json(loclist)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => {
    const locations = new location({
        location: req.body.location,
    })

    try{
        const locationsave =  await locations.save() 
        res.json(locationsave)
    }catch(err){
        res.send('Error ' + err)
    }
})
module.exports = router