const express = require('express')
const { homepage, fetchAllBooks, createABook, getABook, updateABook, deleteABook} = require('../controllers/controller')

const route = express.Router()

route.get('/', homepage) //hompepage


route.get('/books',fetchAllBooks ) //get all books

route.get('/books/:id',getABook) // get one book



route.patch('/books/:id',updateABook) //update a book

route.post('/books',createABook) //post/create a book in the database

route.delete('/books/:id', deleteABook) //delete a book



route.get('/books/:id',getABook) // get one book


route.get('/books/?search',getABook) // search for a book

module.exports  = route