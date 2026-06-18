function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function notFound(res) {
  sendJson(res, 404, { error: "Route not found" });
}

function methodNotAllowed(res) {
  sendJson(res, 405, { error: "Method not allowed" });
}

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
    req.on("error", reject);
  });
}

module.exports = { sendJson, notFound, methodNotAllowed, readBody };
