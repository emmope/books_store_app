class Book {
    title
    authour
    type 
    snippet
    imageCover
    publishedYear
    publisher 
    isbn

    constructor({ title,
        authour,
        type ,
        snippet,
        imageCover,
        publishedYear,
        publisher, 
        isbn}){

            this. title  = title
            this.authour  = authour
            this.type   = type 
            this.snippet  = snippet
            this.imageCover  = imageCover
            this.publishedYear  = publishedYear
           this.publisher   =  publisher 
            this.isbn  = isbn
        }
}
module.exports =  Book