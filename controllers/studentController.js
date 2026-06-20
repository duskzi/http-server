const studentService = require("../services/studentService");
const { sendJson, readBody } = require("../utils");

// Retorna os estudantes
function getStudents(req, res) {
  sendJson(res, 200, studentService.listStudents());
}

// Procura o estudante por ID
function getStudentById(req, res, id) {
  const student = studentService.findStudent(id);
  
  if (!student) return sendJson(res, 404, { error: "Estudante não encontrado" });
  sendJson(res, 200, student);
}

// Cria o estudante
async function createStudent(req, res) {
  const body = await readBody(req);
  const student = studentService.addStudent(body);

  if (!student) return sendJson(res, 400, { error: "Campo na URL 'name' e 'class' estão faltando" });
  sendJson(res, 201, { message: "Estudante criado: ", student });
}

// Atualiza o objeto do estudante com base no ID
async function updateStudent(req, res, id) {

  const body = await readBody(req);
  if (!body) return sendJson(res, 400, { error: "Corpo (body) da requisição é inválido, procure por erros" });

  const student = studentService.editStudent(id, body);
  if (!student) return sendJson(res, 404, { error: "Estudante não encontrado" });
  sendJson(res, 200, student);
}

// Deleta o estudante com base em seu ID
function deleteStudent(req, res, id) {
  const removed = studentService.removeStudent(id);

  if (!removed) return sendJson(res, 404, { error: "Estudante não encontrado" });
  res.writeHead(204);
  res.end();
}

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent };
