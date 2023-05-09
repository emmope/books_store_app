const express = require('express')
const { homepage, fetchAllBooks, createABook, getABook,searchForBooks, updateABook, deleteABook} = require('../controllers/books')

const route = express.Router()

route.get('/', homepage) //hompepage

route.get('/books', fetchAllBooks ) //get all books
route.get('/books/search?', searchForBooks) // search for a boo
route.get('/books/:id', getABook) // get one book
route.patch('/books/:id', updateABook) //update a book
route.post('/books', createABook) //post/create a book in the database
route.delete('/books/:id', deleteABook) //delete a boo

module.exports  = route