const express = require("express");
const request = require("request");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const token = process.env.TOKEN || '???';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/", (req, res) => {
  const symbol = req.query["symbol"];
  const range = req.query["range"];
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${range}?token=${token}`;

  request(url).pipe(res);
});

app.listen(port, () =>
  console.log(`StockChart app listening on port ${port}!`)
);
