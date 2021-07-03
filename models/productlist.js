const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    ProductName: {
        type: String,
        required: true
    },
    Expiry: {
        type: String,
        required: true
    },
    Qty:{
        type:Number,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Active:{
        type:Boolean,
        required:true
    },
    Unit: {
        type: String,
        required: true,
        //default: false
    },
    ProductImage: {
        type: String,
        required: true,
       // default: false
    }

},
{collection: "Productlist"}
)

module.exports = mongoose.model('prodlist',productSchema)