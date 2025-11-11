const formKit = document.querySelector('#formRecursos')
const nomeKit = document.querySelector('#inputNomeRecursos')
const emailKit = document.querySelector('#inputEmailRecursos')
const resultadoMensagem = document.querySelector('#mensagemResultado')

function receberKit(event) {
    event.preventDefault();

    let nome = nomeKit.value
    let email = emailKit.value

    if (nome && email) {
        resultadoMensagem.innerHTML = `<p><strong>Obrigado, ${nome}! Seu kit gratuito será enviado para ${email}.</strong></p>`
    }
}
formKit.addEventListener('submit', receberKit) 