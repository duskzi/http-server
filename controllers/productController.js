const productService = require("../services/productService");
const { sendJson } = require("../utils");

function getProducts(req, res) {
  const parsed = new URL(req.url, `http://${req.headers.host}`);
  const category = parsed.searchParams.get("categoria");
  sendJson(res, 200, productService.listProducts(category));
}

module.exports = { getProducts };
