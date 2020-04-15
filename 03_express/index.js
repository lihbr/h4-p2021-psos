require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "Hello World!",
    data: {}
  });
});

app.listen(port, () => {
  console.info(`Example app listening at http://localhost:${port}`);
});
