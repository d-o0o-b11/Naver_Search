const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const axios = require("axios");

const ID_KEY = "WsGKyLCy_ji5cwnsgvoZ";
const SECRET_KEY = "9OQFQICZ8p";

app.use(cors());

app.use(bodyParser.json());

//use
app.use("/movie", (req, res) => {
  console.log("server-search");
  const word = req.query.query;
  console.log(word);
  axios
    .get("https://openapi.naver.com/v1/search/movie.json", {
      params: {
        query: word,
        display: 100,
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      const items = response.data;
      res.send({ items: items });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use("/book", (req, res) => {
  console.log("server-search");
  const word = req.query.query;
  console.log(word);
  axios
    .get("https://openapi.naver.com/v1/search/book.json", {
      params: {
        query: word,
        display: 100,
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      const items = response.data;
      res.send({ items: items });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/", (req, res) => {
  res.send("안녕하세요");
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
