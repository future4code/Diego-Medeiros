const numero1: number = Number(process.argv[3]);
const numero2: number = Number(process.argv[4]);

switch (process.argv[2]) {
  case "add":
    console.log(`Resposta:${numero1 + numero2}`);
    break;
  case "sub":
    console.log(`Resposta:${numero1 - numero2}`);
    break;
  case "mult":
    console.log(`Resposta:${numero1 * numero2}`);
    break;
  case "div":
    console.log(`Resposta:${numero1 / numero2}`);
    break;
}

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// Exemplo :
// npm run start add 2 2
// "Resposta: 4"
