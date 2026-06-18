let students = [
  { id: 1, name: "Ana Lima", class: "3DS-A", course: "Desenvolvimento de Sistemas" },
  { id: 2, name: "Bruno Souza", class: "2DS-B", course: "Desenvolvimento de Sistemas" },
  { id: 3, name: "Carla Mendes", class: "1DS-A", course: "Desenvolvimento de Sistemas" },
  { id: 4, name: "Diego Rocha", class: "3DS-B", course: "Desenvolvimento de Sistemas" },
  { id: 5, name: "Eduarda Nunes", class: "2DS-A", course: "Desenvolvimento de Sistemas" },
];

let nextId = 6;

function getAll() {
  return students;
}

function getById(id) {
  return students.find((s) => s.id === id) || null;
}

function create(data) {
  const student = {
    id: nextId++,
    name: data.name,
    class: data.class,
    course: data.course || "Desenvolvimento de Sistemas",
  };
  students.push(student);
  return student;
}

function update(id, data) {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  if (data.name) students[index].name = data.name;
  if (data.class) students[index].class = data.class;
  return students[index];
}

function remove(id) {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return false;
  students.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
