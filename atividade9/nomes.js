const nomeCompleto = document.getElementById("nome-completo");
const sobrenome = document.getElementById("sobrenome");
const nome = document.getElementById("nome");

function separar() {
    const valor = nomeCompleto.value.trim().replace("  ", " ");
    let nomeSobrenome = valor.split(' ');
    nome.innerHTML = nomeSobrenome[0];
    sobrenome.innerHTML = nomeSobrenome[1] || '';
}
