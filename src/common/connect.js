var mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "web_courses",
});

connection.connect();

module.exports = connection;
