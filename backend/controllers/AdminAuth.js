const AdminModel = require('../models/Admin')

module.exports.createAdmin =  async(req,res)=>{
    try {
        let{name,email,password} = req.body
    const admin = await AdminModel.create({
        name,
        email,
        password
    })
    } catch (error) {
        console.log("Error in Creating Admin"+err);
    }
}