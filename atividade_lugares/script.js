const imagens = document.querySelectorAll('img')

console.log("Lista de imagens:")
imagens.forEach(function(imagem, indice) {
    console.log("Imagem " + (indice + 1) + ": " + imagem.src)
})

const primeiroParagrafo = document.getElementById("titulo");

primeiroParagrafo.textContent = "5 lugares que eu Celso Eduardo desejaria conhecer"
