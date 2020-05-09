/*
1. Podemos percorrer valores de uma lista, especificamente falando, de um array, podemos usar métodos de laço que é o for, for of e for each.  

Nesse exemplo percorro todo o array "numeros" para achar os numeros menores de 7. 
let numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroMenor=[0]
for (numero of numeros) {
  if (numero < 7) {
    numeroMenor.push(numero)   
  }
}
console.log(numeroMenor)

2.  a. false
    b. false
    c. true
    d. true
    e. true

3.  Não. Do jeito que está o código entra em loop infinito, faltou o incremento da variavel para que uma hora se chegue no resultado esperado. Retirei o = da condição para dar exatamente o numeros pares no resultado incluindo o zero, e adicionei o prompt para inserção do número.

const quantidadeDeNumerosPares=prompt("Digite um numero:")
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)

  i++
}
*/

