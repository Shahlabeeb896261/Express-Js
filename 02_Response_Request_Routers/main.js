const express = require("express");
const blog = require('./routes/blog.js')
const shop = require('./routes/shop.js')
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog);
app.use('/shop', shop);

app.get("/", (req, res) => {
  console.log("This is a Get request");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Hello World Post!");
  console.log("This is a Post request");
});

app.put("/", (req, res) => {
  res.send("Hello World Put!");
  console.log("This is a Put request");
});

app.delete("/", (req, res) => {
  res.send("Hello World Delete!");
  console.log("This is a Delete request");
});

app.get("/home", (req, res) => {
  console.log("This is an HTML File");
  res.sendFile("templates/index.html", {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


