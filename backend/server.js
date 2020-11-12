const express = require("express");
const products = require("./data/products");
var cors = require("cors");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("app running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  return res.json(product);
});

app.listen(5000, console.log("server running on port 5000"));
