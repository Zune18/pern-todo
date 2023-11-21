const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password", //change
  host: "localhost",
  port: 5432,
  database: "database_name" //change
});

module.exports = pool;