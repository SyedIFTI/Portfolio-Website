const mongoose = require('mongoose')
mongoose.
connect("mongodb://127.0.0.1:27017/eshop")
.then(()=>{
    console.log("Database is Connected");
}).catch(()=>{
    console.log("Connection with db is Failed :(");
})
module.exports = mongoose