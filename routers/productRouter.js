const express = require("express");
const router =express.Router();
const Product = require("../models/productModel");
const {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");


//Create a product
router.post("/", createProduct);

// Fetch or Get All products
router.get("/", getAllProduct);

// Get a product
router.get("/:id", getProduct);

//Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports=router;