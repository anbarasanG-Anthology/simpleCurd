const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World i am anbarasan hi')
})

app.listen(3000)

mongoose.connect('mongodb+srv://anbucrud:1ZPrNUe3zy8UNMAs@backendapi.afu20j6.mongodb.net/node?retryWrites=true&w=majority&appName=backendAPI')
  .then(() => console.log('Connected!'))
  .catch((error)=>{console.log(error)})