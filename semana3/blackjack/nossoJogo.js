/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Bem vindo ao jogo Blackjack!")
if(confirm("Deseja realizar uma rodada?")) {
let pontuacaoUsuario = 0
const primeiraCartaUsuario = comprarCarta()
pontuacaoUsuario += primeiraCartaUsuario.valor



let pontuacaoComputador = 0
const primeiraCartaComputador = comprarCarta()
pontuacaoComputador += primeiraCartaComputador.valor



let palavrasMensagemComputador = ["Computador - cartas:", primeiraCartaComputador.texto, "pontuação:", pontuacaoComputador]
let palavrasMensagemUsuario = ["Usuário - cartas:", primeiraCartaUsuario.texto, "pontuação:", pontuacaoUsuario]
let mensagem = ""
let mensagem2 = ""

for (let trecho of palavrasMensagemComputador) {
   mensagem = mensagem + trecho + " "
}

for (let trecho2 of palavrasMensagemUsuario) {
   mensagem2 = mensagem2 + trecho2 + " "
}

console.log (mensagem)
console.log (mensagem2)


   // o que fazer se o usuário clicar "ok"
   if (pontuacaoUsuario > pontuacaoComputador) {
      
      console.log ("Usuário ganhou")
   }

   else if (pontuacaoUsuario < pontuacaoComputador) {
   
   console.log ("Computador ganhou")
}

   else if (pontuacaoUsuario = pontuacaoComputador) {

   console.log ("Empate!")
}
}

else {
   // o que fazer se o usuário clicar "cancelar"
   console.log ("O jogo acabou!")
} 





/* Exemplo de deixar tudo como string
let palavras = ["Oi", "sumida", "tudo", "bem?"]
let mensagem = ""

for (let palavra of palavras) {
    mensagem = mensagem + palavra + " "
}

console.log(mensagem)
*/

