const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    prodids:{
          type:String,
      },
      qty: {
          type: String,
      }});
const orderSchema = new mongoose.Schema({

    orderid: {
        type: String,
        required: true
    },
    orderdatetime: {
        type: Date,
        required: true
    },
    custid:{
        type:String,
        required:true
    },
    Products:[{}],  
    deliverymanid: {
        type: String,
    },
    deliverymanname: {
        type: String,
    },
    status: {
        type: String,
        required: true,
    },
    address:[{}],
    totalqty:{
        type:String,
        required:true
    },
    totalamt:{
        type:String,
        required:true
    },
    customername:{ type:String, required:true }
},
{collection: "Orders"}
)

module.exports = mongoose.model('orderlist',orderSchema)