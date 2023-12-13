const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  console.log("this will register a category");
});

router.patch("/update", (req, res, next) => {
  console.log("this will update a category");
});

router.get("/all", (req, res, next) => {
  console.log("this will return all categories");
});

module.exports = router;
