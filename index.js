const express = require('express')
const dotenv = require('dotenv')
const Route = require('./routes/route')
dotenv.config()

const app = express()

// middleware to accept json data from the client
app.use(express.json())


app.use('/',Route)





const PORT = process.env.PORT  ||  3000

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})
