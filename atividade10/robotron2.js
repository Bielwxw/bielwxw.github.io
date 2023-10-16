const buttons = Array.from(document.getElementsByClassName("controle-ajuste"));

buttons.forEach(botao => {
    botao.addEventListener("click", mudarValor);
});

function mudarValor(event) {
    const botao = event.srcElement;
    const input = botao.parentNode.children[1];
    if (botao.innerText === "+") {
        if (input.value === "10") return;
        valor = Number(input.value) + 1;
        input.value = valor !== 10 ? "0"+valor : valor;
    }
    else if (botao.innerText === "-") {
        if (input.value === "00") return;
        valor = Number(input.value) - 1;
        input.value = "0"+valor;
    }
}