const studentService = require("../services/studentService");
const { sendJson, readBody } = require("../utils");

function getStudents(req, res) {
  sendJson(res, 200, studentService.listStudents());
}

function getStudentById(req, res, id) {
  const student = studentService.findStudent(id);
  if (!student) return sendJson(res, 404, { error: "Student not found" });
  sendJson(res, 200, student);
}

async function createStudent(req, res) {
  const body = await readBody(req);
  const student = studentService.addStudent(body);
  if (!student) return sendJson(res, 400, { error: "Fields 'name' and 'class' are required" });
  sendJson(res, 201, { message: "Student created", student });
}

async function updateStudent(req, res, id) {
  const body = await readBody(req);
  if (!body) return sendJson(res, 400, { error: "Invalid JSON body" });
  const student = studentService.editStudent(id, body);
  if (!student) return sendJson(res, 404, { error: "Student not found" });
  sendJson(res, 200, student);
}

function deleteStudent(req, res, id) {
  const removed = studentService.removeStudent(id);
  if (!removed) return sendJson(res, 404, { error: "Student not found" });
  res.writeHead(204);
  res.end();
}

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent };
