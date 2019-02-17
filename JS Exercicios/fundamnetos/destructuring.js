//Novo recurso do ES2015        


const pessoa ={
    nome: 'André',
    idade: 5,
    endereco:
    {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome , bemhumorado = true} = pessoa
console.log(sobrenome , bemhumorado )