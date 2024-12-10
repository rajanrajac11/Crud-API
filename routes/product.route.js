const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
