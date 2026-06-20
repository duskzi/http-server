const studentController = require("../controllers/studentController");
const { sendJson, methodNotAllowed } = require("../utils");

// Rota dos estudantes
function studentRoutes(req, res, url, method) {
  if (url === "/alunos") {
    if (method === "GET") return studentController.getStudents(req, res);     // Retorna os estudantes
    if (method === "POST") return studentController.createStudent(req, res);  // Cria um estudante
    return methodNotAllowed(res);
  }

  if (url.startsWith("/alunos/")) { 
    // Pega o ID do estudante na URL
    const id = Number(url.split("/")[2]); 

    if (!id) return sendJson(res, 400, { error: "ID inválido" });
    if (method === "GET") return studentController.getStudentById(req, res, id);
    if (method === "PUT") return studentController.updateStudent(req, res, id);
    if (method === "DELETE") return studentController.deleteStudent(req, res, id);
    return methodNotAllowed(res);
  }

  return false;
}

module.exports = { studentRoutes };
