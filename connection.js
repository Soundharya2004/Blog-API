const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Beelzebub', 
  database: 'blog',
  port:3308 
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
