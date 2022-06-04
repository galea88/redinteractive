const express = require('express')
const app = express()
const port = 8000

const text = {
    "h1Text" : "$1,600",
    "h2Text" : "Deposit Bonus" 
}

//GET ENDPOINT FOR INDEX PAGE
app.get('/api/index', (req, res) => {
  res.send(text) 
})

app.listen(port);