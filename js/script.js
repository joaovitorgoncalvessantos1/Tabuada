// Selecionando os elementos do HTML
const form = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");

const title = document.querySelector("#multiplication-title");
const table = document.querySelector(".multiplication-operations");

// Evento do formulário
form.addEventListener("submit", function (event) {

    // evita recarregar a página
    event.preventDefault();

    // pegando os valores
    const number = Number(numberInput.value);
    const multiplicator = Number(multiplicatorInput.value);

    // validação simples
    if (!number || !multiplicator) {
        table.innerHTML = "<p>Digite um número válido</p>";
        return;
    }

    // atualiza o título
    title.textContent = `Tabuada do número: ${number}`;

    // limpa resultados antigos
    table.innerHTML = "";

    // gera a tabuada
    for (let i = 1; i <= multiplicator; i++) {

        const result = number * i;

        // cria a linha
        const div = document.createElement("div");

        div.classList.add("row");

        div.innerHTML = `
            <span>${number}</span>
            <span>x</span>
            <span>${i}</span>
            <span>=</span>
            <strong>${result}</strong>
        `;

        // adiciona na tela
        table.appendChild(div);
    }

});