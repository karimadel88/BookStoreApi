const { Pool } = require('pg')

var pool = new Pool({
  connectionString: "postgres://gnvfhtqf:Gh71HQAOn3yF7IOCWv2x55iUjVJt4gae@tuffi.db.elephantsql.com/gnvfhtqf",
  connectionTimeoutMillis: 3000,
  idleTimeoutMillis: 2000
})


module.exports = pool
// client.connect()
//   .then(() => console.log("connected"))


//postgres://gnvfhtqf:Gh71HQAOn3yF7IOCWv2x55iUjVJt4gae@tuffi.db.elephantsql.com/gnvfhtqf