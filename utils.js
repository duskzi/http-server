// Envia o JSON
function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

// Erro de não encontrado
function notFound(res) {
  sendJson(res, 404, { error: "Rota não encontrada" });
}

// Método inválido
function methodNotAllowed(res) {
  sendJson(res, 405, { error: "Método inválido" });
}

// Lê o corpo da requisição e parsea para JSON
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve(null);
      }
    });
    req.on("error", reject); // Body inválido
  });
}

module.exports = { sendJson, notFound, methodNotAllowed, readBody };
