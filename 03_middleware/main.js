const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  console.log("Hello");
  next();
}, (req, res) => {
    res.send(`<div>Welcome to the middleware World!`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})