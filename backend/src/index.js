const express = require("express");
const app = express();
const notesrouter = require("./atrangi notes");
const router = require("./atrangi todo list");
const path = require("path");
const buildpath = "../../frontend/build";
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, buildpath)));
app.use(notesrouter);
app.use(router);
app.get("/", (req, res) => {
  res.send("backend start");
});

app.get("/api/corn-job", (req, res) => {
  console.log("Corn-job api called");
  res.send("portfolio backend works");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
