const mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "anime_sekai",
});
db.connect(err => {
  if (err) {
    console.error("the connection was not made please try again");
  } else {
    console.log(`the connection to the database was made succesfully`);
  }
});
module.exports.db = db;
