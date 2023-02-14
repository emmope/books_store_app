const express = require('express')
const { homepage, fetchAllBooks, createABook} = require('../controllers/controller')

const route = express.Router()

route.get('/', homepage) //hompepage


route.get('/books',fetchAllBooks ) //get all books
route.get('/books/:id', ) // get one book
route.patch('/books/:id',) //update a book
route.post('/books', createABook) //post/create a book in the database
route.delete('/books/:id', ) //delete a book




module.exports  = route