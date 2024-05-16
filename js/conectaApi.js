
//Conecta a base Json

async function listaProdutos(){
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, preco, url, id){
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome, 
            preco: preco,
            url: url,
            id: id 
        } )
    });
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


// async function apagarCard(id){
    
//     const conexao = await fetch(`http://localhost:3000/jogos/${id}`, {
//         method: 'DELETE'
//     });
//     const conexaoConvertida = await conexao.json();
//     return conexaoConvertida;
// }

export const conectaApi = {
    listaProdutos,
    criaProduto
}