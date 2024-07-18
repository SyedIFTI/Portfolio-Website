const mongoose = require('mongoose')
const ContactSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    message:String
})
module.exports = mongoose.model("contact",ContactSchema)