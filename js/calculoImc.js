const formImc = document.querySelector('#formularioImc')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botaoLimpar = document.querySelector('#btnLimpar')
const resultado = document.querySelector('#resultadoImc')

function calculoIMC(evento) {
    evento.preventDefault()

    const valorPeso = parseFloat(peso.value)
    const valorAltura = parseFloat(altura.value)
    const imc = valorPeso / (valorAltura * valorAltura)
    const imcFormatado = imc.toFixed(2)
    
    let classificacao = ''
    let classeDeCor = ''

    if (valorPeso > 0 && valorAltura > 0) {
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso.'
            classeDeCor = 'atencao'
        } else if (imc <= 24.9) {
            classificacao = 'Peso Normal.'
            classeDeCor = 'normal'
        } else if (imc <= 29.9) {
            classificacao = 'Sobrepeso.'
            classeDeCor = 'atencao'
        } else if (imc <= 34.9) {
            classificacao = 'Obesidade grau 1.'
            classeDeCor = 'perigo'
        } else if (imc <= 39.9) {
            classificacao = 'Obesidade grau 2.'
            classeDeCor = 'perigo'
        } else {
            classificacao = 'Obesidade grau 3.'
            classeDeCor = 'perigo'
        }
    } else if (valorPeso == 0 || valorAltura == 0) {
        resultado.innerHTML = "<p>Valores inválidos. Digite novamente.<p>"
    }

    resultado.style.display = 'block'
    resultado.className = classeDeCor
    resultado.innerHTML = `<p>Seu IMC é <strong>${imcFormatado}</strong>. <br> Classificação: <strong>${classificacao}</strong></p>`
}

function limpar() {
    peso.value = '';
    altura.value = '';
    resultado.innerHTML = '';
    resultado.style.display = 'none'
}
formImc.addEventListener('submit', calculoIMC)
botaoLimpar.addEventListener('click', limpar)