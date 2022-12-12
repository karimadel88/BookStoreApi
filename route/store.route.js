const express = require('express');
const storeRouter = express.Router();
const {getStoreList,saveStore} = require('./../controller/store.controller')

storeRouter.get('/',getStoreList)
storeRouter.post('/',saveStore)

module.exports = storeRouter