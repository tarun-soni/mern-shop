import express from "express";
import products from "./data/products.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
function newFunction() {
  return require("dotenv");
}
