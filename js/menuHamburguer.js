const botaoMenu = document.querySelector('.btn-mobile');
const navegacaoMobile = document.querySelector('.navegacao-principal-mobile')

function cliqueMenuHamburguer(){
    navegacaoMobile.classList.toggle('active')
    botaoMenu.classList.toggle('active')
}