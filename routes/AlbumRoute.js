const express = require("express");
const aws = require("aws-sdk");

const albumRouter = express.Router();

// AWS SDK
aws.config.update({ region: "us-east-1" });
s3 = new aws.S3({ apiVersion: "2006-03-01" });

albumRouter.get("/", async (req, res) => {
  await s3.listBuckets(function (err, data) {
    if (err) {
      console.log("Get Buckets: Error", err);
      return res.status(500).json({ isDone: false, error: err });
    } else {
      console.log("Get Buckets: Success", data.Buckets);
      return res.status(200).json({ isDone: true, buckets: data.Buckets });
    }
  });
});

albumRouter.put("/", (req, res) => {
  if (!req.body.hasOwnProperty("bucket")) {
    return res.status(400).json({
      isDone: false,
      error: {
        message: "Please enter bucket name",
      },
    });
  }
  if (req.body.bucket.trim() === "") {
    return res.status(400).json({
      isDone: false,
      error: {
        message: "Please enter valid bucket name",
      },
    });
  }
  var bucketParams = {
    Bucket: req.body.bucket,
    ACL: "public-read",
  };

  s3.createBucket(bucketParams, function (err, data) {
    if (err) {
      console.log("Create Bucket: Error", err);
      return res.status(500).json({ isDone: false, error: err });
    } else {
      console.log("Create Bucket: Success", data.Location);
      return res.status(200).json({ isDone: true, result: data.Location });
    }
  });
});

module.exports = albumRouter;
