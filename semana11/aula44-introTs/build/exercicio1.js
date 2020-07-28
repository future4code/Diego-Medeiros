const minhaString = "5";
console.log(minhaString);
const meuNumero = 5;
console.log(meuNumero);
const dadosPessoa = {
    nome: "Gandalf",
    idade: 1000,
    corFavorita: "Branco",
};
console.log(dadosPessoa);
const dadosPessoa1 = {
    nome: "Saruman",
    idade: 10000,
    corFavorita: "Branco",
};
const dadosPessoa2 = {
    nome: "Frodo",
    idade: 300,
    corFavorita: "Marrom",
};
const dadosPessoa3 = {
    nome: "Aragorn",
    idade: 50,
    corFavorita: "Preto",
};
var arcoIris;
(function (arcoIris) {
    arcoIris["VERMELHO"] = "Vermelho";
    arcoIris["LARANJA"] = "Laranja";
    arcoIris["AMARELO"] = "Amarelo";
    arcoIris["VERDE"] = "Verde";
    arcoIris["AZUL"] = "Azul";
    arcoIris["INDIGO"] = "Indigo";
    arcoIris["VIOLETA"] = "Violeta";
})(arcoIris || (arcoIris = {}));
const dadosPessoa4 = {
    nome: "Bozo",
    idade: 60,
    corFavorita: arcoIris.VERMELHO,
};
console.log(dadosPessoa4);
//# sourceMappingURL=exercicio1.js.map