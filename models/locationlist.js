const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    }
},
{collection: "Location"}
)

module.exports = mongoose.model('location',locationSchema)