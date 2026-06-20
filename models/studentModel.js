// Objeto dos estudantes como pedido no exercício
let students = [
  { id: 1, name: "Felipe Forde",    class: "3DS-A", course: "Desenvolvimento de Sistemas" },
  { id: 2, name: "Benjamin Nethan", class: "2DS-B", course: "Desenvolvimento de Sistemas" },
  { id: 3, name: "Don T. Sahur",    class: "1DS-A", course: "Desenvolvimento de Sistemas" },
  { id: 4, name: "Diego Brando",    class: "3DS-B", course: "Desenvolvimento de Sistemas" },
  { id: 5, name: "Glicério F. C.",  class: "2DS-A", course: "Desenvolvimento de Sistemas" },
];

// Próximo de acordo com os IDs já utilizados
let nextId = 6;

// Retorna todos os objetos de estudantes
function getAll() {
  return students;
}

// Procura o estudante por ID
function getById(id) {
  return students.find((s) => s.id === id) || null;
}

// Vincula a data passada ao objeto e adiciona no array de estudantes
function create(data) {
  const student = {
    id: nextId++,
    name: data.name,
    class: data.class,

    // Seta o curso para DS cada o curso estiver vazio
    course: data.course || "Desenvolvimento de Sistemas", 
  };
  students.push(student);
  return student;
}

// Atualiza as informações do usuário com ID passado  
function update(id, data) {
  const index = students.findIndex((s) => s.id === id);

  // Retorna NULL caso não existe studante com esse ID
  if (index === -1) return null;

  if (data.name) students[index].name = data.name;    // Atualiza o nome
  if (data.class) students[index].class = data.class; // Atualiza a classe

  return students[index]; // Retorna o objeto do estudante
}

// Remove o estudante por ID
function remove(id) {
  const index = students.findIndex((s) => s.id === id);
   // Retorna FALSE caso não ache o estudante
  if (index === -1) return false;
  students.splice(index, 1);

   // Retorna TRUE caso ache o estudante
  return true;
}

module.exports = { getAll, getById, create, update, remove };
