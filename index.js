const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");

// Routes
const Image = require("./routes/ImageRoute");

dotenv.config();
const app = express();
const port = 3002;

app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/image", Image);

app.get("/", (req, res) => {
  res.send("Album Route API");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Image API is listening on port ${port}`);
});
