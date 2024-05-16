import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, url) {
    const produtos = document.createElement("div");
    produtos.className = "card";
    produtos.innerHTML = `<img class="imagem__daporra" src="${url}" alt="Imagen del producto">
    <div class="card__container__info">
        <p class="nome__produto">${nome}</p>
        <div class="card__container__valor">
            <p class="valor__preco">R$ ${preco}</p>
            <img class="lixeira" src="/imagens/Vector.png" alt="Ícono de eliminación">
        </div>
    </div>`
    return produtos;
}


async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.url)))
}

listaProdutos();