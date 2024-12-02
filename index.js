const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
tt;
app.get("/", (req, res) => [res.send("Hel!!!lo everyone Wassup")]);
