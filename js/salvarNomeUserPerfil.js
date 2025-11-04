const containerNomeUser = document.querySelector('.nome-user')
const containerEmailUser = document.querySelector('.email-user')
const nomeUser = localStorage.getItem('nomeUsuario')
const emailUser = localStorage.getItem('emailUsuario')

if(nomeUser){
    containerNomeUser.innerHTML = `${nomeUser}`
    if(emailUser === null){
        containerEmailUser.innerHTML = "Nenhum e-mail cadastrado."
    } else {
        containerEmailUser.innerHTML = `${emailUser}`
    }
}