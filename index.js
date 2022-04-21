const express = require('express')
const app = express()
let port = process.env.PORT || 3000;
const importDataPlaces = require('./places.json')
const importDataBooks = require('./books.json')
const importDataLinks = require('./links.json')

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get("/places", (req, res) => {
  res.send(importDataPlaces)
})
app.get("/books", (req, res) => {
  res.send(importDataBooks)
})
app.get("/links", (req, res) => {
  res.send(importDataLinks)
})


app.listen(port, () => {
  console.log(`example on port ${port}`)
})
