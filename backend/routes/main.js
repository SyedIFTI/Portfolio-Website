const express = require('express')
const router = express.Router()
const  ContactModel = require('../models/Contact')
router.post('/sendmessage',async(req,res)=>{
let{name,email,contact,message} = req.body
const Contact= await ContactModel.create({
    name,email,contact,message
})
res.json({"message":"Your message is submitted sucessfuly"})
})
module.exports = router