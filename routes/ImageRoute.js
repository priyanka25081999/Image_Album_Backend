const express = require("express");
const aws = require("aws-sdk");

const imageRouter = express.Router();

// AWS SDK
aws.config.update({ region: "us-east-1" });
s3 = new aws.S3({ apiVersion: "2006-03-01" });

imageRouter.get("/", (req, res) => {
  const bucket = req.query.bucket;

  if (bucket === undefined) {
    return res.status(500).json({
      isDone: false,
      error: {
        message: "Please enter bucket name",
      },
    });
  }

  if (bucket.trim() === "") {
    return res.status(500).json({
      isDone: false,
      error: {
        message: "Please enter valid bucket name",
      },
    });
  }

  var bucketParams = {
    Bucket: bucket,
  };

  s3.listObjects(bucketParams, function (err, data) {
    if (err) {
      console.log("Error", err);
      return res.status(500).json({ isDone: false, error: err });
    } else {
      console.log("Success", data);
      return res.status(200).json({ isDone: true, result: data.Contents });
    }
  });
});

imageRouter.post("/", (req, res) => {
  const file = req.files.file;
  var uploadParams = {
    Bucket: req.body.bucket,
    Key: file.name,
    Body: file.data,
    ACL: "public-read",
  };

  s3.upload(uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
      return res.status(500).json({ isDone: false, error: err });
    }
    if (data) {
      console.log("Upload Success", data.Location);
      return res.status(200).json({ isDone: true, result: data.Location });
    }
  });
});

module.exports = imageRouter;
