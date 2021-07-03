var express = require('express')
var router = express.Router()


router.get('/', async(req,res) => {
    try{
        res.send(" GET request connected")
           //const aliens = await Alien.find()
           //res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})



module.exports = router