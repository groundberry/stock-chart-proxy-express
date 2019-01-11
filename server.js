const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Welcome to StockChart!'))

app.listen(port, () => console.log(`StockChart app listening on port ${port}!`))