const express = require("express");
const Product = require("./models/product.model.js");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Wassup Everyone. There is match of Pokhara and Janakpur today.");
});

mongoose
  .connect(
    "mongodb+srv://rajanrajac11:BSRw7AYJht6kybwD@cluster0.jbx9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
