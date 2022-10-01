const express = require("express");

const albumRouter = express.Router();

albumRouter.get("/", (req, res) => {
  res.send("Ambum GET Route");
});

albumRouter.put("/", (req, res) => {
  res.send("Ambum PUT Route");
});

module.exports = albumRouter;
