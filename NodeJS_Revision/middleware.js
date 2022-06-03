const express = require('express');
const app = express(0)
app.use("/", (req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();
  });
  app.get("/home", (req, res) => {
    res.send("This is home page");
  });
  app.get("/about", (req, res) => {
    res.send("This is about-us page");
  });
  app.listen(3000, console.log("Example listening on port 3000!"));