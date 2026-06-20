const generalController = require("../controllers/generalController");
const { methodNotAllowed, notFound } = require("../utils");

// Lida com as rotas
function generalRoutes(req, res, url, method) {
  if (url === "/") {
    if (method !== "GET") return methodNotAllowed(res);
    return generalController.getHome(req, res);
  }

  if (url === "/sobre") {
    if (method !== "GET") return methodNotAllowed(res);
    return generalController.getAbout(req, res);
  }

  if (url === "/status") {
    if (method !== "GET") return methodNotAllowed(res);
    return generalController.getStatus(req, res);
  }

  if (url === "/pagina") {
    if (method !== "GET") return methodNotAllowed(res);
    return generalController.getPage(req, res);
  }

  if (url === "/api/status") {
    if (method !== "GET") return methodNotAllowed(res);
    return generalController.getApiStatus(req, res);
  }

  return false;
}

module.exports = { generalRoutes };
