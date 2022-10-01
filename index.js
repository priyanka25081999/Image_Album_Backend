const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
// Routes
const Album = require("./routes/AlbumRoute");
const Image = require("./routes/ImageRoute");

dotenv.config();
const app = express();
const port = 3001;

app.use(express.json());
app.use(helmet());

app.use("/album", Album);
app.use("/image", Image);

app.get("/", (req, res) => {
  res.send("Album Route API");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
