const crypto = require('crypto')
const Book = require('../models/book')
const homepage = (req, res)=>{
res.send('You are viewing our homepage')
}

const database = []


const createABook = (req, res)=>{
    /*
    setp 1: receive the data from the client
    step 2: validate the data
    step 3: manipulate the data if neccessary
    step 4: save the data
    step 5: return the saved data to the client
    */
    const id = crypto.randomBytes(32).toString('hex')
    const book = req.body // setp 1: receive the data from the client

    if(book.isbn == null){  // step 2: validate the data
        throw new Error('isbn is required')
    }

    book.id = id // step 3: manipulate the data if neccessary

    database.push(book) //    step 4: save the data

    res.json(book) // step 5: return the saved data to the client

}

const fetchAllBooks = (req,res)=>{
    /*
    step: get all the data from the db and send back to the client
    */
res.send(database)

}

const  getABook = (req,res)=>{

    /*
    setp 1: receive the request from the client
    step 2: validate the data
    step 3: manipulate the data if neccessary
    step 4: return the saved data to the client
    */
   const id = req.params.id
   //use the id to query the db

   const  book = database.find((item)=>{ 
    return item.id == id
   })
   if(!book){
    res.status(401).json({
        message: "No book found"
    })
   }
   res.json(book)

}

const updateABook = (req,res)=>{

}

const deleteABook = (req, res)=>{

}








module.exports = { homepage, createABook, fetchAllBooks, getABook, updateABook, deleteABook}