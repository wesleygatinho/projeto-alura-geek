
//Este arquivo serve para mostrar os produtos na TELA;
//Também apaga em constroiCard();
import { conectaApi } from "./conectaApi.js";
import { apagarCard } from "./removeProduto.js";
const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, url, id) {
    const produtos = document.createElement("div");
    produtos.className = "card data-card";
    produtos.setAttribute('data-id', id);
    produtos.innerHTML = `<img class="imagem__produtos" src="${url}" alt="Imagen do produto">
    <div class="card__container__info">
        <p class="nome__produto">${nome}</p>
        <div class="card__container__valor">
            <p class="valor__preco">R$ ${preco}</p>
            <button class="delete-button" data-id="${id}">
            <img class="lixeira" src="/imagens/Vector.png" alt="icone apagar" data-lixo>
            </button>
        </div>
    </div>`

    const lixeira = produtos.querySelector('.delete-button');
    lixeira.addEventListener('click', async() =>{
        const id = produtos.getAttribute('data-id')
        await apagarCard(id);
        produtos.remove();
        
    })

    return produtos;
}


async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.url, elemento.id)))
}

listaProdutos();




