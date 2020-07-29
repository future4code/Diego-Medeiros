import * as fs from "fs";

const arquivo: string = process.argv[2];
const tarefaDigitada: string = process.argv[3];

fs.appendFileSync(`./src/${arquivo}`, "\n" + tarefaDigitada);
