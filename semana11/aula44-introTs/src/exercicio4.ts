type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

console.log(pokemon1);
console.log(pokemon2);
console.log(pokemon3);

//A - Rodaria o comando tsc nomeDoArquivo.ts
//B - Criaria um arquivo chamado tsconfig.json , para que pudesse rodar o tsc, já gerando os arquivos js a partir dos arquivos ts que estejam dentro da pasta src e organizando os arquivos de acordo com a config do tsconfig.json (é nele que se define o caminho que estão os arquivos ts).
//C - Podemos rodar o tsc transpilando todos os arquivos ts que encontrar dentro da pasta setada no arquivo tsconfig.json. Ou podemos rodar tsc + os nomes dos arquivos separados por espaço.
//D - Interessante em ter esse nivel de personalização ao transpilar o arquivo. O que me chamou atenção foi os Additional Checks e a opção "lib" em compilerOptions. Não encontrei alguns parâmetros comparando com o dos slides, como o include e exclude. O arquivo dos slides devem vir com melhores opções para iniciantes e podem ser até um padrão mais utilizado.
