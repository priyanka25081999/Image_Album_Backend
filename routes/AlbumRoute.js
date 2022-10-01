const express = require("express");
const aws = require("aws-sdk");

const albumRouter = express.Router();

// AWS SDK
aws.config.update({ region: "us-east-1" });
s3 = new aws.S3({ apiVersion: "2006-03-01" });

albumRouter.get("/", async (req, res) => {
  await s3.listBuckets(function (err, data) {
    if (err) {
      console.log("Error", err);
      res.status(500).json({ isDone: false, error: err });
    } else {
      console.log("Success", data.Buckets);
      res.status(200).json({ isDone: true, buckets: data.Buckets });
    }
  });
});

albumRouter.put("/", (req, res) => {
  res.send("Ambum PUT Route");
});

module.exports = albumRouter;
