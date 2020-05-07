
let array = []
function funcao1() {

event.preventDefault()
let inputTitulo = document.getElementById('titulo').value 
let inputAutor = document.getElementById('autor').value 
let inputPostagem = document.getElementById('postagem').value

const postagemBlog = {

    titulo : inputTitulo,
    autor : inputAutor,
    postagem : inputPostagem
}

document.getElementById('titulo').value=""
document.getElementById('autor').value=""
document.getElementById('postagem').value=""

array.push(postagemBlog);

funcao2(postagemBlog)
    


console.log(array)
}

function funcao2(postagemBlog) {
    document.getElementById('areaDePostagem').innerHTML += `<h2> ${postagemBlog.titulo} </h2> <h3> ${postagemBlog.autor} </h3> <p> ${postagemBlog.postagem} </p>` 
}