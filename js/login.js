const formularioLogin = document.querySelector('#form-cadastro')
const inputNome = document.querySelector('#inputNome')
const inputSenha = document.querySelector('#senha')
const inpuitConfirmarSenha = document.querySelector('#confirmar-senha')
const inputEmail = document.querySelector('#inputEmail')
const resultadoLogin = document.querySelector('#resultado-login')
const loginContainer = document.querySelector('.login-container')

function cadastroUser(evento){
    evento.preventDefault();

    let nome = inputNome.value
    let email = inputEmail.value
    let senha = inputSenha.value
    let confirmarSenha = inpuitConfirmarSenha.value

    if(senha !== confirmarSenha){
        inputNome.value = '';
        inputEmail.value = '';
        inputSenha.value = '';
        inpuitConfirmarSenha.value = '';  
        $("#resultado-login").html("<h3>Senhas diferentes. Digite novamente</h3>").show();
    } else{
		$("#resultado-login").html("").hide();
        localStorage.setItem('nomeUsuario', nome)
        localStorage.setItem('emailUsuario', email)
        setTimeout(()=>{
            window.location.replace('./index.html')
        }, 2000)
        resultadoLogin.innerHTML = "<h3>Estamos te redirecionando. Aguarde alguns instantes...</h3>"
    }

    loginContainer.innerHTML = '';
    loginContainer.innerHTML = `<a href="./perfilUsuario.html" id="saudacao-clicavel">Olá, <b>${nome}</b></a>`
}
formularioLogin.addEventListener('submit', cadastroUser)