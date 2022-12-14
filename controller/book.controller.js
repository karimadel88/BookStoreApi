const { dbQuery } = require('./../db/connection')
const {queryList} = require('./../db/query.js');


exports.addNewBook = async (req, res) => {
  try{    
      const title = req.body.title
      const description = req.body.description
      const author = req.body.author
      const pages = req.body.pages
      const store_id = req.body.storeCode
      const publisher = req.body.publisher
      const createdBy = "Admin"
      const createdOn = new Date()
    
      if(!title || !description ||!author || !pages || !store_id || !publisher){
        return res.status(500).send({ error: 'Some or all detailes missed' })
      }
    
      const values = [title,description,author,publisher,pages,store_id,createdBy,createdOn]
      const response = await dbQuery(queryList.SAVE_BOOK_QUERY,values)
      return res.status(201).send(response)
  }
  catch(err){
    console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to save books'});
  }
}

exports.updateBook = async (req , res) => {

    try {
    
        const createdBy = "admin";
        const createdOn = new Date();
        const bookId=req.body.bookId;
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;
        const publisher = req.body.publisher;
        const pages = req.body.pages;
        const storeCode = req.body.storeCode;

        if(!bookId || !title || !author || !publisher || !storeCode){
            return res.status(500).send({ error: 'bookId , title , author , publisher , storeCode are required , can not empty' })
        }
        
        values =[title , description , author , publisher , pages , storeCode,  createdBy , createdOn , bookId];
        const updateBookQuery = queryList.UPDATE_BOOK_QUERY;
        await dbQuery(updateBookQuery , values);
        return res.status(200).send("Successfully update book title :" + title);
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to update book title : '+ title});
    }
}

exports.deleteBook = async (req , res) => {
    const bookId = req.params.bookId;

    try {
      if(!bookId){
        return res.status(500).send({ error: 'can not delete empty bookId' })
        }

        const deleteBookQuery = queryList.DELETE_BOOK_QUERY;
        
        const test = await dbQuery(deleteBookQuery , [bookId]);
        if(test.rowCount == 0){
          return res.status(200).send("already not exit")
        }
        return res.status(200).send("Successfully book deleted ");
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to delete book with id : '+ bookId});
}
}

exports.getBookList = async (req , res) => {
    try {
         const bookListQuery = queryList.GET_BOOK_LIST_QUERY;
         const result = await dbQuery(bookListQuery);
         return res.status(200).send(JSON.stringify(result.rows));
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to get books'});
    }   
 }

