const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Server is running");
});

app.get("/", (req, response) => {
  response.send("Hello there. This");
});
