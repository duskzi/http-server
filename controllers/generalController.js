const { sendJson } = require("../utils");

function getHome(req, res) {
  sendJson(res, 200, { message: "Welcome to the server" });
}

function getAbout(req, res) {
  sendJson(res, 200, { message: "Pure Node.js server — no frameworks" });
}

function getStatus(req, res) {
  sendJson(res, 200, { status: "active", uptime: process.uptime() });
}

function getApiStatus(req, res) {
  sendJson(res, 200, { api: "online", timestamp: new Date().toISOString() });
}

function getPage(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><title>Servidor Node</title></head>
<body>
  <h1>Servidor Node.js Puro</h1>
  <p>Este servidor foi criado sem o uso de frameworks como Express.</p>
  <ul>
    <li>GET /</li>
    <li>GET /alunos</li>
    <li>GET /produtos</li>
    <li>POST /alunos</li>
    <li>PUT /alunos/:id</li>
    <li>DELETE /alunos/:id</li>
  </ul>
</body>
</html>`);
}

module.exports = { getHome, getAbout, getStatus, getApiStatus, getPage };
