function funcao1() {

let tarefa1 = document.getElementById("tarefa").value //input
let dia = document.getElementById("diaDaSemana").value //select


    
    switch(dia){
        case "segunda":
        document.getElementById("dia1").innerHTML += `<li>${tarefa1}</li>`
        break;

        case "terça":
        document.getElementById("dia2").innerHTML += `<li>${tarefa1}</li>`
        break;
        
        case "quarta":
        document.getElementById("dia3").innerHTML += `<li>${tarefa1}</li>`
        break;
       
        case "quinta":
        document.getElementById("dia4").innerHTML += `<li>${tarefa1}</li>`
        break;
       
        case "sexta":
        document.getElementById("dia5").innerHTML += `<li>${tarefa1}</li>`
        break;
       
        case "sabado":
        document.getElementById("dia6").innerHTML += `<li>${tarefa1}</li>`
        break;
       
        default:
        document.getElementById("dia7").innerHTML += `<li>${tarefa1}</li>`
        break;

    }       

}