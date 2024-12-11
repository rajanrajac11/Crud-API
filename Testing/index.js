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
    "mongodb+srv://rajanrajac11:eG18N20ocDGWMuq2@api-testing.qfa4j.mongodb.net/?retryWrites=true&w=majority&appName=API-Testing"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Database Connected!");
      console.log(`Server is running at port ${port}`);
    });
  });
