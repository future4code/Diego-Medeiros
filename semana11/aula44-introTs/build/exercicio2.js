function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length,
    };
    return estatisticas;
}
console.log(obterEstatisticas([1, 2, 3, 4, 5]));
const amostraDeIdades = {
    numeros: [10, 30, 40, 50, 60],
    obterEstatisticas: (numeros) => obterEstatisticas(numeros),
};
console.log(amostraDeIdades);
//# sourceMappingURL=exercicio2.js.map