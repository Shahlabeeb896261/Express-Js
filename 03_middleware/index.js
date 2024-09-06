const express = require('express')
const blog = require('./routes/blog');
const shop = require('./routes/shop')
const app = express()

app.use(express.static("public"));

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use('/blog', blog); 
app.use('/shop', shop);
app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000)