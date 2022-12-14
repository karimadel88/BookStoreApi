const express = require('express');
const storeRouter = express.Router();
const {getStoreList,saveStore} = require('./../controller/store.controller')

storeRouter.get('/store',getStoreList)
storeRouter.post('/store',saveStore)

module.exports = storeRouter