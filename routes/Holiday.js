var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.json(require("./Y2020"));
});

module.exports = router;
