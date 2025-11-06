const mensagemRedirecionamento = document.querySelector('#mensagem-redirecionamento')
function redirecionarHome(){
    setTimeout(() => {
        mensagemRedirecionamento.innerHTML = "Você será redirecionado para a página inicial em 10 segundos."
        window.location.href = 'index.html';
    }, 2000);
}