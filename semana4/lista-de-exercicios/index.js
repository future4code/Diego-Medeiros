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

4.
function verificaTriangulo() {
  let medida1 = prompt("Digite medida 1 do triangulo:")
  let medida2 = prompt("Digite medida 2 do triangulo:")
  let medida3 = prompt("Digite medida 3 do triangulo:")

  if (medida1 === medida2 && medida1 === medida3 ) {
    console.log(`Triangulo Equilátero`)
  }
  else if ((medida1 === medida2 && medida1 !== medida3) || (medida1 === medida3 && medida1 !== medida2) || (medida2 === medida3 && medida2 !== medida1) )
    console.log(`Triangulo Isosceles`)
  
  else {
    console.log(`Triangulo Escaleno`)
  } 
}
verificaTriangulo()

5.
function comparacaoNumerica () {
let numero1 = prompt("Digite um número:")
let numero2 = prompt("Digite outro número:")
let subtracao1 = numero1 - numero2
let subtracao2 = numero2 - numero1


if (numero1 < 0) {
  console.log(`Numeros incompativeis por favor digite numeros positivos`)
}

if (numero2 < 0) {
  console.log(`Numeros incompativeis por favor digite numeros positivos`)-50
}

if (numero1 > numero2) {
  console.log(`O maior é: ${numero1}`)
}
if (numero2 > numero1) {
  console.log(`O maior é: ${numero2}`)
}

if (numero1 % numero2 === 0 && numero2 % numero1 !== 0 ) {
  
  console.log(`${numero1} é divisivel por ${numero2}`)
  console.log(`${numero2} não é divisivel por ${numero1}`)
}
else if (numero2 % numero1 === 0 && numero1 % numero2 !== 0 ) {
  console.log(`${numero2} é divisivel por ${numero1}`)
  console.log(`${numero1} não é divisivel por ${numero2}`)
}

else if (numero1 % numero2 !== 0 || numero2 % numero1 !==0){
  console.log(`Números não divisiveis`)
}

else if (numero1 === numero2) {
  console.log(`Números iguais, ${numero1} dividido por ${numero2}: ${numero1/numero2}` )
}

if (numero1 > numero2 && subtracao1 > 0){
  console.log(`A diferença entres eles é ${subtracao1}`)
}

else if (numero1 < numero2 && subtracao2 > 0){
  console.log(`A diferença entre eles é ${subtracao2}`)
}
}
comparacaoNumerica()
*/
