const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

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
     password:{
        type:String,
        required:true,
    }
   /* 
    location: {
        type: String,
        required: true
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
    geolatlang:{
        type:String,
        required:true,
    } */
},
{collection: "Customer"}
)

module.exports = mongoose.model('customers',customerSchema)