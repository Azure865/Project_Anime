var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var con = require("./connection");
/* GET users listing. */

router.post("/", (req, res, next) => {
  data = req.body;
  console.log(data);
  bcrypt.genSalt(5, function(err, salt) {
    bcrypt.hash(data.SignupPassword, salt, function(err, hash) {
      con.db.query(
        `INSERT INTO usersinfo( Name,Email,UserName, Password) VALUES
        ('${data.SignupName}','${data.SignupEmail}','${data.SignupUserName}', '${hash}')`,
        (err, result) => {
          if (err) {
            res.send("Error");
          } else {
            res.send("Inserted");
          }
        },
      );
    });
  });
});

module.exports = router;
