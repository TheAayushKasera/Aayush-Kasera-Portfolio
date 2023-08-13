const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = new express.Router();

// Allow requests from any origin
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Body parsing middleware to parse URL-encoded and JSON data from the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

// Connect to MongoDB database
const tododb = mongoose.createConnection(
  "mongodb+srv://theaayushkasera:995511995511@cluster0.uxcefmf.mongodb.net/?retryWrites=true&w=majority"
);

// Define a MongoDB schema for the Listmodel
const listSchema = new mongoose.Schema({ item: String });

// Create a model based on the schema
const Listmodel = tododb.model("Lists", listSchema);

// Function to create data and store it in the database
const createData = async (item) => {
  const document = new Listmodel({ item: item });
  const result = await document.save();
};

// Function to read data from the database
const readData = async () => {
  const result = await Listmodel.find();
  return result;
};

// Function to delete data from the database based on the given _id
const deleteData = async (_id) => {
  const result = await Listmodel.findByIdAndDelete({ _id: _id });
  return result.item;
};

// Route to handle POST requests to add an item to the database
router.post("/api/todo-post", async (req, res) => {
  await createData(req.body.item); // Create data and store it in the database

  res.send("Item added to Database"); // Send a response back to the client
});

// Route to handle GET requests to fetch data from the database
router.get("/api/todo-get", async (req, res) => {
  const result = await readData(); // Read data from the database
  res.send(result); // Send the fetched data as the response
});

// Route to handle DELETE requests to delete data from the database based on the given _id
router.delete("/api/todo-delete", async (req, res) => {
  const _id = req.body._id; // Extract the _id property from the request body
  const result = await deleteData(_id); // Delete data from the database
  res.send(result); // Send the deleted item as the response
});

module.exports = router;
