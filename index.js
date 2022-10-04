const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");

// Routes
const Album = require("./routes/AlbumRoute");

dotenv.config();
const app = express();
const port = 8080;

app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/album", Album);

app.get("/", (req, res) => {
  res.send("Album Route API");
});

app.listen(port, () => {
  console.log(`Album API is listening on port ${port}`);
});
