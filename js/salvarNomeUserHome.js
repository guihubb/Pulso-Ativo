const nomeLogin = document.querySelector('.login-container')
const nomeSalvo = localStorage.getItem('nomeUsuario')

if(nomeSalvo){
    nomeLogin.innerHTML = `<a href="./perfilUsuario.html" id="saudacao-clicavel">Olá, <b>${nomeSalvo}</b></a>`
}