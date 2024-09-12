document.addEventListener('DOMContentLoaded', () => {
    // Captura os botões do header
    const inicioButton = document.querySelector('.inicio-button');
    const contratosButton = document.querySelector('.contratos-button');
    const cadastroButton = document.querySelector('.cadastro-button');
    const alugarButton = document.querySelector('.alugar-button');
    const propriedadesButton = document.querySelector('.propriedades-button');
    const logoutButton = document.querySelector('.logout-button');



    

    // Redireciona para a página de Início
    inicioButton.addEventListener('click', () => {
        window.location.href = 'inicio.html';
    });

    // Redireciona para a página de Contratos
    contratosButton.addEventListener('click', () => {
        window.location.href = 'contratos.html';
    });

    // Redireciona para a página de Alugar
    alugarButton.addEventListener('click', () => {
        window.location.href = 'alugar.html';
    });

    // Redireciona para a página de Propriedades
    propriedadesButton.addEventListener('click', () => {
        window.location.href = 'propriedades.html';
    });

    // Redireciona para a página de Logout
    logoutButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
