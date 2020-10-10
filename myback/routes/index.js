var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(req.session.username);
  console.log(req.session.username);
});

module.exports = router;
