const express = require("express");
const router = express.Router();

const stateToCode = require("../data/states_titlecase.json");

router.get("/", (req, res, next) => {
  const state = req.query.state;
  var isExist = false;

  stateToCode.forEach(element => {
    if (element.name == state) {
      isExist = true;
      res.status(200).json({
        code: element.abbreviation
      });
    }
  });

  if (!isExist) {
    res.status(404).json({
      code: "Not found"
    });
  }
});

module.exports = router;
