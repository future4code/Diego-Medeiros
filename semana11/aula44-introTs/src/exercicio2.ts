type dados = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): dados {
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

//A - Entrada numeros , saída objeto estatisticas.
//B - soma, num, estatisticas . Type Number
//C - Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas:

type amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => dados;
};

const amostraDeIdades: amostra = {
  numeros: [10, 30, 40, 50, 60],
  obterEstatisticas: (numeros) => obterEstatisticas(numeros),
};
console.log(amostraDeIdades);
