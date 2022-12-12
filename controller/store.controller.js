const {queryList} = require('./../db/query.js');
const { dbQuery } = require('./../db/connection')

exports.getStoreList = async (req, res) => {
  try {
    const query = queryList.GET_STORE_LIST_QUERY;
    const done = await dbQuery(query)
    return res.status(200).send(done.rows)
  } catch (error) {
    console.log(error)
  }
}

exports.saveStore = async (req,res) => {
  try {
    let createdBy = "Admin"
    let createdOn = new Date()
    let storeName = req.body.storeName;
    let address = req.body.address;
    if(!storeName || !address){
        return res.status(500).send({ error: 'store name and address are required , can not empty' })
    }
    let storeCode = "ABC"
    let values =[storeName , storeCode , address , createdBy , createdOn];
    
    let querySave = queryList.SAVE_STORE_QUERY
    
    console.log(querySave)
    let response = await dbQuery(querySave,values)

    return res.status(201).send("Done")
    

  } catch (error) {
    console.log("Error : " + error);
        return res.status(500).send({error : 'Failed to save store'});
  }
}

