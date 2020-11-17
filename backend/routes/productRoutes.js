import express from "express";
const router = express.Router();

import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc   Fetch all Products
//route   GET /api/products
//access  PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc   Fetch single Products
//route   GET /api/products/:id
//access  PUBLIC
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
