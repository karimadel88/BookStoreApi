const express = require('express')
const app = express();
const pool = require('./db/pool')
const storeRouter = require('./route/store.route');
const bookRouter = require('./route/book.route')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use("/api/v1", storeRouter);

app.use("/api/v1",bookRouter)


const server = app.listen(5000, () => {
  console.log(`Server start ....... `)
})