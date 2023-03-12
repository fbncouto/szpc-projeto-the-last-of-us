/* 
Objetivo: Quando clicarmos no botão temos que mostrar a imagem do fundo correspondente 

- Passo 1 - dr um jeito de pegar o elemento HTML dos botões

- Passo 2 - dar um jeito de indentificar o clique do usuário no botão

- Passo 3 - Desmarcar o botão selecioando anterior

- Passo 4 - Marcar o botão clicado como se estivesse selecionada

- Passo 5 - Esconder imagem anterior

- Passo 6 - Fazer aparecer a imagem correspodente ao botão clicado
*/

// Passo 1 - dr um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - dar um jeito de indentificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3 - Desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4 - Marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // Passo 5 - Esconder imagem ativa do fundo 
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // Passo 6 - Fazer aparecer a imagem correspodente ao botão clicado
        imagens[indice].classList.add('ativa');  
    })
})