const { sendJson } = require("../utils");
const fs = require("node:fs");
const path = require("node:path");

// Retorna uma mensagem do home
function getHome(req, res) {
  sendJson(res, 200, { message: "Bem-vindo ao servidor, acesse /pagina para mais informações" });
}

// Mensagem sobre mim
function getAbout(req, res) {
  sendJson(res, 200, { message: "Olá, eu sou o Felipe Kühl, criador desse servidor" });
}

// Retorna o status do servidor e a quanto tempo ele está ativo
function getStatus(req, res) {
  sendJson(res, 200, { status: "active", uptime: process.uptime() });
}

// Retorna o status da API e a data da requisição
function getApiStatus(req, res) {
  sendJson(res, 200, { api: "online", timestamp: new Date().toISOString() });
}

// Retorna a página HTML
function getPage(req, res) {

  // Usei aqui o path, pois não estava reconhecendo o caminho absoluto (../index.html)
  fs.readFile(path.join(__dirname, "..", "index.html"), (err, page) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Erro interno do servidor ao ler a página"); 
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(page);
  });
}

module.exports = { getHome, getAbout, getStatus, getApiStatus, getPage };
