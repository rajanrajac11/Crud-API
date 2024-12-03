const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => [res.send("Hello everyone Wassup")]);

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
