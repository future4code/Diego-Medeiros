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
/*
4. A
const numero1 = prompt("Digite um número:")
const numero2 = prompt("Digite um segundo numero:")

if (numero2 > numero1) {
    console.log(numero2, numero1)
}
else {
    console.log(numero1, numero2)
}
*/

//4. B e C
const numero1 = prompt("Digite um número:")
const numero2 = prompt("Digite um segundo numero:")
const numero3 = prompt("Digite um terceiro numero:")

if (numero3 > numero2 && numero3 > numero1 && numero2 < numero1) {
    console.log (numero3, numero1, numero2)
}

else if (numero3 > numero2 && numero3 > numero1 && numero2 > numero1) {
    console.log (numero3, numero2, numero1)
}

else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) {
    console.log(numero2, numero1, numero3)    
}

else if (numero2 > numero1 && numero2 > numero3 && numero1 < numero3 ) {
    console.log(numero2, numero3, numero1)
}

else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2){
    console.log (numero1, numero3, numero2)
}


else if (numero1 === numero2 && numero1 == numero3) {
    console.log ("Digite pelo menos um números diferente!")
}

else {
    console.log(numero1, numero2, numero3)
}


//sem o ultimo else if, ele mostra todos os números sendo iguais
//5 A
//https://drive.google.com/open?id=1BxJacgvK41nSZKilXN2AoameiPlefEtq



