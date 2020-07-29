"use strict";
//A - Através do process.argv
const nome = process.argv[2];
const age = Number(process.argv[3]);
console.log(`Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`);
