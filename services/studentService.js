const studentModel = require("../models/studentModel");

function listStudents() {
  return studentModel.getAll();
}

function findStudent(id) {
  return studentModel.getById(id);
}

function addStudent(data) {
  if (!data || !data.name || !data.class) return null;
  return studentModel.create(data);
}

function editStudent(id, data) {
  return studentModel.update(id, data);
}

function removeStudent(id) {
  return studentModel.remove(id);
}

module.exports = { listStudents, findStudent, addStudent, editStudent, removeStudent };
