const minhaString: string = "5";
console.log(minhaString);

//A - Ocorre um erro pelo valor da variavel ser diferente do tipo setado

const meuNumero: number | string = 5;
console.log(meuNumero);

//B - Só colocar um pipe com o tipo string

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const dadosPessoa: pessoa = {
  nome: "Gandalf",
  idade: 1000,
  corFavorita: "Branco",
};
console.log(dadosPessoa);

//C - Construindo a tipagem do objeto
const dadosPessoa1: pessoa = {
  nome: "Saruman",
  idade: 10000,
  corFavorita: "Branco",
};

const dadosPessoa2: pessoa = {
  nome: "Frodo",
  idade: 300,
  corFavorita: "Marrom",
};

const dadosPessoa3: pessoa = {
  nome: "Aragorn",
  idade: 50,
  corFavorita: "Preto",
};

enum arcoIris {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  INDIGO = "Indigo",
  VIOLETA = "Violeta",
}

type pessoaComEnum = {
  nome: string;
  idade: number;
  corFavorita: arcoIris;
};

const dadosPessoa4: pessoaComEnum = {
  nome: "Bozo",
  idade: 60,
  corFavorita: arcoIris.VERMELHO,
};
console.log(dadosPessoa4);
