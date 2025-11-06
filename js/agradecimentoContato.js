const formContato = document.querySelector('#form-contato');
function enviarContato(evento){
    evento.preventDefault();

    window.location.href = 'obrigadoContato.html';
}
formContato.addEventListener('submit', enviarContato);