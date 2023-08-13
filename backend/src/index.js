const express = require("express");
const app = express();
const notesrouter = require("./atrangi notes");
const router = require("./atrangi todo list");
const path = require("path");
const buildpath = "../../frontend/build";
const cors = require("cors");
app.use(
  cors({
    origin: "https://aayush-kasera-portfolio.onrender.com/",
  })
);

const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, buildpath)));
app.use(notesrouter);
app.use(router);

app.listen(port, () => {
  console.log("listening on port " + port);
});
