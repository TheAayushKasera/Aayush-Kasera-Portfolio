const express = require("express");
const app = express();
const notesrouter = require("./atrangi notes");
const router = require("./atrangi todo list");
const path = require("path");
const buildpath = "../../frontend/build";
app.use(express.static(path.join(__dirname, buildpath)));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, buildpath + "/index.html"));
});

app.use(notesrouter);
app.use(router);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
