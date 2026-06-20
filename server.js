const http = require("http");

const { studentRoutes } = require("./routes/studentRoutes");
const { productRoutes } = require("./routes/productRoutes");
const { generalRoutes } = require("./routes/generalRoutes");
const { notFound } = require("./utils");

/*
  SERVIDOR EM NODE.JS
  Felipe Kühl

  Especificações:
    Imports: CommonJS.
    Estrutura: Rota, Modelo,
    Serviços, Controladores.
    Porta: 3000

  Todas as variáveis foram escritas em 
  inglês para manter boas práticas.

  Mensagens do servidor e os comentários
  estão todos em português.

  Qualquer dúvida enviar email para:

  felipekuhl321@gmail.com
*/

const PORT = 3000;

// Trata as rotas com base na URL
function handleRoutes(req, res) {

  const url = req.url.split("?")[0];  // Separa a URL dos parametros fda requisição
  const method = req.method;          // Método da requisição

  // Procura pela rota certa, retornando caso for válida
  // Se não, passa para a próxima rota do IF
  if (generalRoutes(req, res, url, method) !== false) return;
  if (studentRoutes(req, res, url, method) !== false) return;
  if (productRoutes(req, res, url, method) !== false) return;

  // Rota não encontrada ou nenhum dos casos acima for válido
  notFound(res); 
}

// Cria o servidor
const server = http.createServer(handleRoutes);

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
