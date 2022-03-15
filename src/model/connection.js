const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'rafael',
  password: 'Rafael12345!',
  database: 'LabsDB',
});

module.exports = connection;