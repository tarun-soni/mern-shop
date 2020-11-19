import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import asyncHander from "express-async-handler";
//@desc   Fetch all Products
//route   GET /api/products
//access  PUBLIC
const getProducts = asyncHander(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHander(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getProducts, getProductById };
