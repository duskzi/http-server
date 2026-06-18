const productModel = require("../models/productModel");

function listProducts(category) {
  if (category) return productModel.getByCategory(category);
  return productModel.getAll();
}

module.exports = { listProducts };
