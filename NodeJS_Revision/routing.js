const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello India");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.all('/all',(req, res) => {
    res.send('app.all handles all the request')
})

app.listen(3000, () => console.log("Example app listening on port 3000!"));