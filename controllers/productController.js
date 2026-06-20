const productService = require("../services/productService");
const { sendJson } = require("../utils");

// Retorna os produtos com base na categoria
function getProducts(req, res) {

  // Utiliza a classe URL para facilitar a busca dos parametros
  const parsed = new URL(req.url, `http://${req.headers.host}`); 
  
  // Procura pelo paramentro categoria
  const category = parsed.searchParams.get("categoria"); 
  sendJson(res, 200, productService.listProducts(category));
}

module.exports = { getProducts };