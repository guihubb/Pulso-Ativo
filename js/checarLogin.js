const loginContainerDesktop = document.querySelector('.login-container');
const loginLinkMobile = document.querySelector('.login-container-mobile a');
const savedName = localStorage.getItem('nomeUsuario');

if (savedName) {
    const saudacaoLinkDesktop = `<a href="./perfilUsuario.html" class="link-perfil">Olá, <b>${savedName}</b>!</a>`;
    const saudacaoLinkMobile = `Olá, <b>${savedName}</b>!`;
    if (loginContainerDesktop) {
        loginContainerDesktop.innerHTML = saudacaoLinkDesktop;
    }

    if (loginLinkMobile) {
        loginLinkMobile.href = './perfilUsuario.html';
        loginLinkMobile.innerHTML = saudacaoLinkMobile;
        loginLinkMobile.classList.add('link-perfil');
    }
}