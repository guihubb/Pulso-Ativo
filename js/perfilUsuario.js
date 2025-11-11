const saudacao = document.querySelector('#saudacao-clicavel')
function irParaPerfilDoUsuario(){
    window.location.href('./perfilUsuario.html')
}
saudacao.addEventListener('click', irParaPerfilDoUsuario)