function cliqueMenuHamburguer() {
    const botaoMenu = document.querySelector('.btn-mobile');
    const navegacaoMobile = document.querySelector('.navegacao-principal-mobile');
    
    if (botaoMenu && navegacaoMobile) {
        navegacaoMobile.classList.toggle('active');
        botaoMenu.classList.toggle('active');
    }
}

const nomeLoginContainer = document.querySelector('.login-container');
const nomeSalvo = localStorage.getItem('nomeUsuario');

if (nomeLoginContainer && nomeSalvo) {
    nomeLoginContainer.innerHTML = `<a href="./perfilUsuario.html" id="saudacao-clicavel">Olá, <b>${nomeSalvo}</b>!</a>`;
}



const formImc = document.querySelector('#formularioImc');

if (formImc) {
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const botaoLimpar = document.querySelector('#btnLimpar');
    const resultado = document.querySelector('#resultadoImc');

    function calculoIMC(evento) {
        evento.preventDefault();

        const valorPeso = parseFloat(peso.value);
        const valorAltura = parseFloat(altura.value);

        // Validação de NaN (importante para evitar erros)
        if (isNaN(valorPeso) || isNaN(valorAltura) || valorPeso <= 0 || valorAltura <= 0) {
            resultado.style.display = 'block';
            resultado.innerHTML = "<p>Valores inválidos. Digite novamente.</p>";
            resultado.className = 'perigo';
            return; // Para a execução
        }
        
        const imc = valorPeso / (valorAltura * valorAltura);
        const imcFormatado = imc.toFixed(2);
        
        let classificacao = '';
        let classeDeCor = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso.';
            classeDeCor = 'atencao';
        } else if (imc <= 24.9) {
            classificacao = 'Peso Normal.';
            classeDeCor = 'normal';
        } else if (imc <= 29.9) {
            classificacao = 'Sobrepeso.';
            classeDeCor = 'atencao';
        } else if (imc <= 34.9) {
            classificacao = 'Obesidade grau 1.';
            classeDeCor = 'perigo';
        } else if (imc <= 39.9) {
            classificacao = 'Obesidade grau 2.';
            classeDeCor = 'perigo';
        } else {
            classificacao = 'Obesidade grau 3.';
            classeDeCor = 'perigo';
        }

        resultado.style.display = 'block';
        resultado.className = classeDeCor;
        resultado.innerHTML = `<p>Seu IMC é <strong>${imcFormatado}</strong>. <br> Classificação: <strong>${classificacao}</strong></p>`;
    }

    function limpar() {
        peso.value = '';
        altura.value = '';
        resultado.innerHTML = '';
        resultado.style.display = 'none';
    }

    formImc.addEventListener('submit', calculoIMC);
    botaoLimpar.addEventListener('click', limpar);
}



const formularioLogin = document.querySelector('#formulario-login');

if (formularioLogin) {
    const inputNome = document.querySelector('#inputNome');
    const inputSenha = document.querySelector('#senha');
    const inpuitConfirmarSenha = document.querySelector('#confirmar-senha');
    const inputEmail = document.querySelector('#inputEmail');
    const resultadoLogin = document.querySelector('#resultado-login');
    const loginContainer = document.querySelector('.login-container');

    function cadastroUser(evento){
        evento.preventDefault();

        let nome = inputNome.value;
        let email = inputEmail.value;
        let senha = inputSenha.value;
        let confirmarSenha = inpuitConfirmarSenha.value;

        if(senha !== confirmarSenha){
            inputNome.value = '';
            inputEmail.value = '';
            inputSenha.value = '';
            inpuitConfirmarSenha.value = '';
            resultadoLogin.innerHTML = "<h3>Senhas diferentes. Digite novamente</h3>";
        } else {
            localStorage.setItem('nomeUsuario', nome);
            localStorage.setItem('emailUsuario', email);

            if (loginContainer) {
                loginContainer.innerHTML = `<a href="./perfilUsuario.html" id="saudacao-clicavel">Olá, <b>${nome}</b>!</a>`;
            }
            resultadoLogin.innerHTML = "<h3>Cadastro realizado! Estamos te redirecionando...</h3>";
            setTimeout(() => {
                window.location.href = './index.html';
            }, 2000);
        }
    }
    
    formularioLogin.addEventListener('submit', cadastroUser);
}


const containerNomeUser = document.querySelector('.nome-user');
const containerEmailUser = document.querySelector('.email-user');

if (containerNomeUser && containerEmailUser) {
    const nomeUser = localStorage.getItem('nomeUsuario');
    const emailUser = localStorage.getItem('emailUsuario');

    if (nomeUser) {
        containerNomeUser.innerHTML = `${nomeUser}`;
        
        if (emailUser === null || emailUser === "") {
            containerEmailUser.innerHTML = "Nenhum e-mail cadastrado.";
        } else {
            containerEmailUser.innerHTML = `${emailUser}`;
        }
    } else {
        alert("Você precisa estar logado para ver esta página.");
        window.location.href = './login.html';
    }
}