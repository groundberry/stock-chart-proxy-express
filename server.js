const express = require("express");
const request = require("request");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
  next();
});

app.get("/", (req, res, next) => {
  const companyName = req.query["companyName"];
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${companyName}&types=quote,news,chart&range=1m&last=5`;

  request(url, (err, resIEX, body) => {
    if (!err && resIEX.statusCode === 200) {
      res.send(body);
    } else {
      next(err);
    }
  });
});

app.listen(port, () =>
  console.log(`StockChart app listening on port ${port}!`)
);
