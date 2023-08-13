const express = require("express");
const app = express();
const notesrouter = require("./atrangi notes");
const router = require("./atrangi todo list");
const path = require("path");
const buildpath = "../../frontend/build";

const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, buildpath)));
app.use(cors());
app.use(notesrouter);
app.use(router);

app.listen(port, () => {
  console.log("listening on port 8000");
});
