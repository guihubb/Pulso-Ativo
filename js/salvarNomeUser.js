const nomeLogin = document.querySelector('.login-container')
const nomeSalvo = localStorage.getItem('nomeUsuario')
const emailSalvo = localStorage.getItem('emailUsuario')

if(nomeSalvo){
    nomeLogin.innerHTML = `Olá, <b>${nomeSalvo}</b>`
}