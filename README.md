# Servidor HTTP em Node.js

Servidor HTTP (sem frameworks) construído com Node.js, seguindo arquitetura MVC. Os dados são armazenados apenas em RAM, durante o tempo que o servidor estiver ligado.

## Rotas

### Gerais

| Método | Rota            | Descrição                        |
|--------|-----------------|----------------------------------|
| GET    | `/`             | Mensagem de boas-vindas          |
| GET    | `/sobre`        | Informações sobre o servidor     |
| GET    | `/status`       | Status e tempo de atividade      |
| GET    | `/pagina`       | Página HTML                      |
| GET    | `/api/status`   | Status da API                    |

### Alunos

| Método | Rota            | Descrição                        |
|--------|-----------------|----------------------------------|
| GET    | `/alunos`       | Listar todos os alunos           |
| POST   | `/alunos`       | Criar um novo aluno              |
| GET    | `/alunos/:id`   | Buscar aluno por ID              |
| PUT    | `/alunos/:id`   | Atualizar aluno por ID           |
| DELETE | `/alunos/:id`   | Remover aluno por ID             |

### Produtos

| Método | Rota            | Descrição                        |
|--------|-----------------|----------------------------------|
| GET    | `/produtos`     | Listar produtos, (`?categoria=`) |


