const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello everyone Wassup");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://rajanrajac11:BSRw7AYJht6kybwD@cluster0.jbx9n.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");

    app.listen(3000, () => {
      console.log("Server is running at 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
