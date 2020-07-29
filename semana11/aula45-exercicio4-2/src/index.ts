import * as fs from "fs";

const arquivo: string = process.argv[2];
const tarefaDigitada: string = process.argv[3];

try {
  fs.appendFileSync(`./src/${arquivo}`, "\n" + tarefaDigitada);
  console.log("Tarefa adicionada com sucesso!");
} catch (error) {
  console.log("Erro ao adicionar tarefa!");
}

// Crie uma aplicação Node que receba uma string representando o nome do arquivo da lista de tarefas e uma string representando uma nova tarefa, em seguida o programa deve adicionar a nova tarefa em um arquivo que tenha o nome da lista de tarefas. Para isso, crie um arquivo chamado tarefas.txt

// Exemplo
// $ npm start tarefas.txt "Comprar Leite"
