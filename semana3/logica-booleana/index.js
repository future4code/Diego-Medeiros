//Leitura de código
/*1.
    a.false
    b.false
    c.true
    d.false
    e.boolean

   2.
    a. É a maneira de se guardar várias informações dentro do código. Se declara da seguinte forma: let array = [1, 2, 3]
    b.0
    c. Com o .lenght
    d.  I. undefined
        II. null
        III. 11
        IV. 3 e 4
        V. 19 e 9
        VI. 3
        VII. 1

    */

  
//Código escrito

let fah = 77
let celsius= 80
let grausFgrausK =  (fah - 32)*5/9 + 273.15 + " " + "K"
let grausCgrausF =  (celsius)*9/5 + 32 + "°F"
let grausCgrausK =  (grausCgrausF - 32)*5/9 + 273.15
let dadoC = prompt("Digita o valor em Celsius:")

//1
//a
console.log (grausFgrausK)
//b
console.log (grausCgrausF)
//c
celsius= 30
grausCgrausF =  (celsius)*9/5 + 32 
grausCgrausK =  (grausCgrausF - 32)*5/9 + 273.15 + "°K"
console.log (grausCgrausF + "°F", grausCgrausK)

//d
celsius= Number(dadoC)
grausCgrausF =  (celsius)*9/5 + 32 
grausCgrausK =  (grausCgrausF - 32)*5/9 + 273.15 + "°K"
console.log (grausCgrausF + "°F", grausCgrausK)


//2
let endereco = prompt("1. Qual o seu endereço?")
let idade = prompt("2. Qual sua idade?")
let jogoFavorito = prompt("3. Qual o seu jogo favorito?")
let plataformaJogo = prompt("4. Aonde prefere jogar?{PS4,PC,XBOX,NINTENDO SWITCH}?")
let nome = prompt("5. Qual o seu Nome")

console.log ("1. Qual o seu endereço?","Resposta:", endereco)
console.log ("2. Qual sua idade?", "Resposta:", idade)
console.log ("3.Qual o seu jogo favorito?", "Resposta:", jogoFavorito)
console.log ("4.Aonde prefere jogar?{PS4,PC,XBOX,NINTENDO SWITCH}?", "Resposta:", plataformaJogo)
console.log ("5.Qual o seu Nome?", "Resposta:", nome)



//3
const quiloWattHora = 0.05
let quiloWattUsado = prompt("Digite os KW gastos:")
quiloWattUsado = Number(quiloWattUsado)
let quiloWattGasto = quiloWattHora * quiloWattUsado
let porcentagem= 15
let resultadoPorcentagem = (porcentagem * quiloWattGasto) / 100
let valorPago = quiloWattGasto - resultadoPorcentagem

console.log ("Valor gasto em reais :", quiloWattGasto) 
console.log ("Valor do desconto de 15% em reais:", resultadoPorcentagem)
console.log ("Valor total a ser pago em reais:", valorPago)