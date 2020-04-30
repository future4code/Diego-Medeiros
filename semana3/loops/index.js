/* 
1. O código tá incrementando o valor da váriavel i em +1 e somando com o valor de sum atual. Printa na tela = 105.
2.
a. Ele adiciona o item no array novaLista caso o resto da sua divisão seja zero.
b. [10, 15, 25, 30]
c. com 3: [12,15,18,21,27,30]
   com 4: [12]

DESAFIO 1
    Seria uma quantidade de zeros equivalente ao número da linha >>
0
00
000
0000
*/

/*
3 a.
let original = [40, 30, 20, 45, 50, 60]
let novoOriginal = []
let maior=original[0]
let menor=original[0]

for(let num of original) {
    if(num > maior) {
        maior=num
    }
    
    else if(num < maior){
        menor=num
    
    }
    
}
console.log("O maior número é: ",maior, "O menor número é:", menor)
*/

/*
b.
let original = [40, 30, 20, 45, 50, 60]
let novoOriginal = []
let divisao=0

for(let num of original) {
   divisao = num/10
   novoOriginal.push(divisao)
   
}
console.log(novoOriginal)
*/

/*
c.
let original = [40, 30, 20, 45, 50, 60]
let novoOriginal = []
let par=0

for(let num of original) {
   if (num%2 ===  0) {
       par=num

    novoOriginal.push(par)    
   }  
}
console.log(novoOriginal)
*/

/*
d.
let original = [40, 30, 20, 45, 50, 60]
let novoOriginal = []


for(let num of original) {
    novoOriginal.push(num) 
}

console.log("O valor do indice 0 é:", original [0])
console.log("O valor do indice 1 é:", original [1])
console.log("O valor do indice 2 é:", original [2])
console.log("O valor do indice 3 é:", original [3])
console.log("O valor do indice 4 é:", original [4])
console.log("O valor do indice 5 é:", original [5])
*/


