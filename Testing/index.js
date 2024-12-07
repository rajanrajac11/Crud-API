const express = require("express");
const Product = require("./models/product.model.js");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wassup Everyone. There is match of Pokhara and Janakpur today.");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    console.log(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://rajanrajac11:eG18N20ocDGWMuq2@api-testing.qfa4j.mongodb.net/?retryWrites=true&w=majority&appName=API-Testing"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is starting in 30000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
