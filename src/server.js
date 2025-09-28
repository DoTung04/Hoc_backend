const express = require('express')

const app = express()

const hostname = 'localhost'
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, hostname, () => {
    console.log(`Hello Tung, I am running server at http://${hostname}:${port}/`)
})