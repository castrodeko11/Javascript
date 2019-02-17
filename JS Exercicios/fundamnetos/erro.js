function tratarErro(erro) {

    // throw new Error('Suporte foi notificado....')
    // throw 10
    //throw true
    //throw 'Mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {

        tratarErro(e)
    }finally{
        console.log('Final')
    }
}


const obj = { nome: 'André Oliveira' }
imprimirNome(obj)