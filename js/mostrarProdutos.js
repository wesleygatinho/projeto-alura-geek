import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, url) {
    const produtos = document.createElement("div");
    produtos.className = "card data-card";
    
    produtos.innerHTML = `<img class="imagem__daporra" src="${url}" alt="Imagen del producto">
    <div class="card__container__info">
        <p class="nome__produto">${nome}</p>
        <div class="card__container__valor">
            <p class="valor__preco">R$ ${preco}</p>
            <img class="lixeira" src="/imagens/Vector.png" alt="Ícono de eliminación" data-lixo>
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



// Dentro do arquivo mostrarProdutos.js

// Adicione um evento de clique ao documento para delegação de eventos, pois os elementos são criados dinamicamente
document.addEventListener("click", async function(evento) {
    if (evento.target.matches("[data-lixo]")) { // Verifica se o elemento clicado é o ícone de lixeira
        const card = evento.target.closest(".card"); // Encontra o card pai do ícone de lixeira clicado
        const idProduto = card.dataset.id; // Obtém o ID do produto do atributo data-id do card

        // Exclui o produto da base de dados
        await excluiProduto(idProduto);

        // Remove o card da interface do usuário
        card.remove();
    }
});

// Função para excluir o produto da base de dados com base no ID
async function excluiProduto(idProduto) {
    const conexao = await fetch(`http://localhost:3000/produtos/${idProduto}`, {
        method: "DELETE"
    });

    const resposta = await conexao.json();
    return resposta;
}

