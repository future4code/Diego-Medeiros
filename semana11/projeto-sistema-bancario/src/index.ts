import * as fs from "fs";
import moment from "moment";

type conta = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  saldo: number;
};

type extrato = [
  {
    valor: number;
    data: string;
    descricao: string;
  }
];

const nomeDigitado: string = process.argv[2];
const cpfDigitado: string = process.argv[3];
const dataDigitada: string = process.argv[4];

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
}

const dados = readDatabase();

export function writeToDatabase(data: any): void {
  try {
    for (let dado of dados) {
      if (dado.cpf === cpfDigitado) {
        return console.log("CPF já existe");
      }
    }
    if (moment().diff(moment(dataDigitada, "DD/MM/YYYY"), "years") < 18) {
      console.log("Idade mínima para criação de conta: 18 anos");
    } else {
      const addDados = () => {
        dados.push({
          nome: nomeDigitado,
          cpf: cpfDigitado,
          dataNascimento: dataDigitada,
          saldo: 0,
          extratoUsuario: [{ valor: 0, data: "18/07/2020", descricao: "game" }],
        });
      };
      addDados();
      const dataAsString: string = JSON.stringify(data, null, 2);
      fs.writeFileSync("./data.json", dataAsString);
    }
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message);
  }
}

writeToDatabase(dados);
