"use strict";
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);
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
