/* 
1 - Se o resto da divisão por 2 for igual a zero, passa no teste, se não, não passa no teste. Só imprime o resultado que passou no teste se o npumero digitado for par. Números ímpares não passam no teste.

2 - a. Mostrar o preço da fruta digitada. 
    b. 2.25
    c. 2 laranjas = 7
       1 maçã 2.25
       3 bananas = 15
       1 uva = 5
       total = 29.25
       d. 5

3 - Mensagem de erro: "mensagem is not defined" .
A mensagem ficou indefinida pois está fora do escopo das condições, colocando console.log(mensagem) dentro do escopo das condições no caso antes da útima chave, funcionaria normalmente.
*/

const numero1 = prompt("Digite um número:")
const numero2 = prompt("Digite um segundo numero:")

if (numero2 > numero1) {
    console.log(numero2, numero1)
}
else {
    console.log(numero1, numero2)
}


