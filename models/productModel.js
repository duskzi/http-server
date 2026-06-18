const products = [
  { id: 1, name: "Detergente", category: "limpeza", price: 2.99 },
  { id: 2, name: "Sabão em Pó", category: "limpeza", price: 8.49 },
  { id: 3, name: "Arroz 5kg", category: "alimentacao", price: 24.90 },
  { id: 4, name: "Feijão 1kg", category: "alimentacao", price: 7.99 },
  { id: 5, name: "Shampoo", category: "higiene", price: 12.50 },
  { id: 6, name: "Desodorante", category: "higiene", price: 9.80 },
];

function getAll() {
  return products;
}

function getByCategory(category) {
  return products.filter((p) => p.category === category);
}

module.exports = { getAll, getByCategory };
