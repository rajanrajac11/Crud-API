const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
app.get("/", (req, res) => [res.send("Hello everyone Wassup!!!!")]);
