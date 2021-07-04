var express=require('express');
var mongoose = require('mongoose');
var routes = require('./routerss/index');
var products = require('./routerss/products');
var deliverymans = require('./routerss/deliveryman');
var customers = require('./routerss/customer');
var locations = require('./routerss/location');
var orders = require('./routerss/orders');
var customeraddress = require('./routerss/customeraddress');
var admin = require('./routerss/admin');
const cors = require('cors');

//var url='mongodb://localhost/test';
var url ='mongodb+srv://MageshBabu:babu123$@cluster0.6a4jc.mongodb.net/FoodOrderDB?retryWrites=true&w=majority';
var app=express();

mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser:true})
var con = mongoose.connection;

con.on('open',function(){
    console.log('mongo db connected');
})

app.use(express.json())
app.use(cors());// for enabling cors origin access

app.use('/', routes);
app.use('/products',products)
app.use('/deliverymans',deliverymans)
app.use('/customers',customers)
app.use('/locations',locations)
app.use('/orders',orders)
app.use('/customeraddress',customeraddress)
app.use('/admin',admin)
/* app.get('/',function(req,res){
    res.send("Hello World to Magesh BABu S");
})

app.get('/getProductlist',services.getProductlist); */

/* app.get('/get_productdetail',service.get_productdetail);

app.get('/delete_product',service.delete_product);

app.get('/add_product',service.add_product); */

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT,function(){
    var host=server.address().address;
    var port=server.address().port;
//console.log(host,port)
   // console.log("Node API listening on http://%s:%s",host,port)
})