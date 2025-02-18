const express = require('express')
const app = express()
const adminRoute = require('./routes/adminRoute')
const mainRoutes = require('./routes/main')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const db = require('./config/mongoose-connection')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use('/',mainRoutes)
app.listen(3000,()=>{
    console.log("the server is running on PORT 3000");
})
