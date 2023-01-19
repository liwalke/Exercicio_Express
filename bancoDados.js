const sequence = {
    _id: 1,
    get id(){ return this._id++ }
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id)
        produto.id = sequence.id;

    produtos[produto.id] = produto
    return produto
}

function getProdutos(){
    return produtos
}

function getProdutoById(id){
    return produtos[id] || {}
}

module.exports = {
    salvarProduto,
    getProdutos,
    getProdutoById,
}