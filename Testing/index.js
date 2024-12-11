const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/product.router");

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//router use
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello This is testing");
});

mongoose
  .connect(
    "mongodb+srv://rajanrajac11:<password>@api-testing.qfa4j.mongodb.net/?retryWrites=true&w=majority&appName=API-Testing"
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connectin failed!");
  });
