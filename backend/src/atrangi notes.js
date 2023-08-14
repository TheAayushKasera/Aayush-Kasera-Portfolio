const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const notesrouter = express.Router();
require("dotenv").config();
// Allow requests from any origin
notesrouter.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Body parsing middleware to parse URL-encoded and JSON data from the request body
notesrouter.use(bodyParser.urlencoded({ extended: true }));
notesrouter.use(express.json());

// Connect to MongoDB database
const notesdb = mongoose.createConnection(
  "mongodb+srv://" +
    process.env.db_user2 +
    ":" +
    process.env.db_pass2 +
    "@cluster0.1300hac.mongodb.net/?retryWrites=true&w=majority"
);

// Define a MongoDB schema for the Listmodel
const notesSchema = new mongoose.Schema({ title: String, description: String });

// Create a model based on the schema
const Notesmodel = notesdb.model("notes", notesSchema);

// Function to create data and store it in the database
const createData = async ({ title, description }) => {
  const document = new Notesmodel({ title: title, description: description });
  const result = await document.save();
};

// Function to read data from the database
const readData = async () => {
  const result = await Notesmodel.find();
  return result;
};

// Function to delete data from the database based on the given _id
const deleteData = async (_id) => {
  const result = await Notesmodel.findByIdAndDelete({ _id: _id });
  return result;
};

// Route to handle POST requests to add an item to the database
notesrouter.post("/api/notes-post", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  console.log(title, description);
  await createData({ title, description }); // Create data and store it in the database
  res.send("Item added to Database"); // Send a response back to the client
});

// Route to handle GET requests to fetch data from the database
notesrouter.get("/api/notes-get", async (req, res) => {
  const result = await readData(); // Read data from the database
  console.log(result);
  res.send(result); // Send the fetched data as the response
});

// Route to handle DELETE requests to delete data from the database based on the given _id
notesrouter.delete("/api/notes-delete", async (req, res) => {
  const _id = req.body._id; // Extract the _id property from the request body
  const result = await deleteData(_id); // Delete data from the database
  res.send(result); // Send the deleted item as the response
});

module.exports = notesrouter;
