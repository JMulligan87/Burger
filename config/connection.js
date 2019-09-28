// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xft8jro1997wy0c3",
  password: "mcngw3pajaj2yuy5",
  database: "uc3xiic10e35jxht"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
