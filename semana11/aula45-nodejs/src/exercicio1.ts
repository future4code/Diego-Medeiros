//A - Através do process.argv
const nome: string = process.argv[2];
const age: number = Number(process.argv[3]);

console.log(
  `Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`
);
