const mongoose = require('mongoose')


const deliverymanSchema = new mongoose.Schema({

    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    doorno: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    Active:{
        type:Boolean,
        required:true,
        default: true
    }
},
{collection: "DeliveryMan"}
)

module.exports = mongoose.model('deliveryman',deliverymanSchema)