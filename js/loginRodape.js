const email = document.getElementById('inputEmail')
const formularioRodape = document.querySelector('#formRodape')

function login(evento){
    evento.preventDefault();

    if(!email){
        alert("E-mail cadastrado!")
        window.scroll({top: 0, behavior:'smooth'})
        email.value = '';
    } else {
        alert("E-mail inválido. Digite novamente.")
    }
}
formularioRodape.addEventListener('submit', login)