const http = require("http");
const { studentRoutes } = require("./routes/studentRoutes");
const { productRoutes } = require("./routes/productRoutes");
const { generalRoutes } = require("./routes/generalRoutes");
const { notFound } = require("./utils");

function handleRoutes(req, res) {
  const url = req.url.split("?")[0];
  const method = req.method;

  if (generalRoutes(req, res, url, method) !== false) return;
  if (studentRoutes(req, res, url, method) !== false) return;
  if (productRoutes(req, res, url, method) !== false) return;

  notFound(res);
}

const server = http.createServer(handleRoutes);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
