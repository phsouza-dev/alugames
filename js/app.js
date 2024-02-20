let jogosAlugados = 0;

for (let i = 1; i <= 3; i++) {
    let gameStatus = document.querySelector(`#game-${i} > .dashboard__item__button`);
    if (gameStatus.text == 'Devolver') {
        jogosAlugados++;
    }
}

console.log(jogosAlugados);

function alterarStatus(id) {
    let botaoJogo = document.querySelector(`#game-${id} > .dashboard__item__button`);
    let capaJogo = document.querySelector(`#game-${id} > .dashboard__item__img`);
    let nomeJogo = document.querySelector(`#game-${id} > .dashboard__item__name`).textContent;

    if (botaoJogo.text == 'Alugar') {
        botaoJogo.textContent = 'Devolver';
        botaoJogo.classList.add('dashboard__item__button--return');
        capaJogo.classList.add('dashboard__item__img--rented');
    } else {
        botaoJogo.textContent = 'Alugar';
        botaoJogo.classList.remove('dashboard__item__button--return');
        capaJogo.classList.remove('dashboard__item__img--rented');
        alert(`Agradecemos por devolver o jogo ${nomeJogo}!`);
    }

    jogosAlugados = 0;

    for (let i = 1; i <= 3; i++) {
        let gameStatus = document.querySelector(`#game-${i} > .dashboard__item__button`);
        if (gameStatus.text == 'Devolver') {
            jogosAlugados++;
        }
    }

    console.log(jogosAlugados);
}

let numeros = [7, 4, 9];
numeros.sort();

console.log(numeros);

function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort();
}