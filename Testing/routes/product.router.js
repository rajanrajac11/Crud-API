const express = require("express");
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
