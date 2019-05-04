const express = require("express");
const router = express.Router();

const codeToState = require("../data/states_hash.json");

router.get("/", (req, res, next) => {
  const code = req.query.code;

  res.status(200).json({
    state: codeToState[code]
  });
});

module.exports = router;
