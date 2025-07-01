const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db',
  user: 'user',
  password: 'userpass',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;