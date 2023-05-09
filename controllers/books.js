const crypto = require('crypto')
const Book = require('../models/book')



function homepage(req, res){
res.send('You are viewing our homepage')
}

const database = []


const createABook = async(req, res)=>{
    /*
    step 1: receive the data from the client
    
    step 2: validate the data
    step 3: manipulate the data if neccessary
    step 4: save the data
    step 5: return the saved data to the client
    */
    // const id = crypto.randomBytes(32).toString('hex')
    // const book = req.body // setp 1: receive the data from the client

    // if(book.isbn == null){  // step 2: validate the data
    //     throw new Error('isbn is required')
    // }t 


const book =  await Book.create(req.body)
    res.json(book) // step 5: return the saved data to the client
}

const fetchAllBooks = async(req,res)=>{
 const books = await Book.find()
res.send(books)

}



const searchForBooks = async(req,res)=>{

    const {author, isbn, date, publisher, snippet} = req.query
    // const  book = await Book.find({author: author, isbn: isbn})// AND

    const  book = await Book.find({ $or: [  {'author': author}, {'isbn': isbn}, {'date':date}, {'publisher': publisher}, {'snippet': snippet}] })
 res.send(book)
}

const  getABook = async(req,res)=>{
/*
    setp 1: receive the request from the client
    step 2: validate the data
    step 3: manipulate the data if neccessary
    step 4: return the saved data to the client
    */
const id = req.params.id
   //use the id to query the db

  const  book = await Book.findOne({_id:id})
   if(!book){
    res.status(404).json({
        message: "No book found"
    })
   }
   res.json(book)
}

const updateABook = (req,res)=>{
}

const deleteABook = (req, res)=>{

}








module.exports = { homepage, createABook, fetchAllBooks, getABook,searchForBooks, updateABook, deleteABook}