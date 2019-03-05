function criarProduto (nome,preco) {

    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',2199.99))
console.log(criarProduto('PS4',219.99))
console.log(criarProduto('31GB Pendrive',299.99))