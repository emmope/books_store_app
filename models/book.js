const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    snippet:{
        type: String
    },
    imageCover:{
        type: String
    },
    publishedYear: Number,
    publisher: {
        type: String
    },
    isbn: {
        type: String
    },
    date: { type: Date, default: Date.now },
  });

  const Book = mongoose.model('books', BookSchema);


module.exports =  Book