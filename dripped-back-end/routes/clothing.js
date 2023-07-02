const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("post working");
  console.log("post working");
});

module.exports = router;
