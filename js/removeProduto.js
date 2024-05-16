
// Este arquivo apaga produtos na minha Base Json;
export async function apagarCard(id){
    
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    });

    if (!conexao.ok) {
        throw new Error('Não foi possível deletar o produto');
    }

    return conexao;
}


