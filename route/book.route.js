const express = require('express');
const { addNewBook ,updateBook,deleteBook,getBookList} = require('./../controller/book.controller')

const bookRouter = express.Router();

bookRouter.post("/saveBook", addNewBook);
bookRouter.get('/books',getBookList);
bookRouter.delete('/deleteBook/:bookId',deleteBook);
bookRouter.put('/update',updateBook);
module.exports = bookRouter