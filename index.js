const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bookRoutes = require('./routes/route')
const userRoutes = require('./routes/users')
dotenv.config()

const app = express()

// middleware to accept json data from the client
app.use(express.json())


app.use('/',bookRoutes)
app.use('/',userRoutes)




const PORT = process.env.PORT  ||  3000

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true })
  .then(()=>{
    console.log('Database Connected!')
    app.listen(PORT,()=>{
      console.log(`Server is runing on port ${PORT}`)
  })
  })