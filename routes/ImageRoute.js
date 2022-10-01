const express = require("express");

const imageRouter = express.Router();

imageRouter.get("/", (req, res) => {
  res.send("Image GET Route");
});

imageRouter.put("/", (req, res) => {
  res.send("Image PUT Route");
});

module.exports = imageRouter;
