/* OBJETIVO 1 - qunado o usuario clicar no botao de ver trailer, devemos abrir a modal com o video do trailer
 - passo 1 - dar um jeito de pegar o elemento q representa o botao na tela usando o js

 - passo 2 - dar um jeito de identificar quando o usuario clicar no botao

 - passo 3 - dar um jeito de pegar o elemento da modal no js

 - passo 4 - abrir a modal na tela  

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
- passo 1 dar um jeito de pegar o elemento de fechar modal usando o js
- passo 2 dar um jeito de identificar quando o usuario clicar no x
- passo 3 fechar a modal

*/



const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
  modal.classList.add("aberto");
  video.setAttribute("src", linkDoVideo);

});



botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

