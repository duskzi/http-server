const productController = require("../controllers/productController");
const { methodNotAllowed } = require("../utils");

function productRoutes(req, res, url, method) {
  if (url === "/produtos") {
    if (method === "GET") return productController.getProducts(req, res);
    return methodNotAllowed(res);
  }

  return false;
}

module.exports = { productRoutes };
