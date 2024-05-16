
//Este arquivo serve adiciona produtos no botão 'Enviar';
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProdutos(evento) {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco").value;

    await conectaApi.criaProduto(nome, preco, url);
}

formulario.addEventListener("submit", evento => criarProdutos(evento));