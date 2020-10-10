var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var con = require("./connection");
/* GET users listing. */
router.get("/", (req, res, next) => {
  console.log(req.session.username);
});
router.post("/", function(req, res, next) {
  data = req.body;
  con.db.query(
    `SELECT * FROM USERSINFO WHERE USERNAME = '${data.LoginUserName}' `,
    (err, result) => {
      if (err) {
        res.send(err);
      } else if (!result[0]) {
        res.send("Invalid user name of password");
      } else {
        pass = result[0].Password;
        bcrypt.compare(data.LoginPass, pass, function(err, success) {
          if (err) {
            res.send("Error occured");
          } else if (success) {
            req.session.username = result[0].UserName;
            req.session.uid = result[0].userInof_id;
            console.log(req.session.username);
            res.send("The user name and password matches");
          } else {
            res.send("The user not found");
          }
        });
      }
    },
  );
});
module.exports = router;
