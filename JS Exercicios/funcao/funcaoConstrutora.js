function Carro(valocidadeMaxima =200, delta = 6) {
    //atributo privado
    let velocidadeAtual =0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= valocidadeMaxima){
            velocidadeAtual += delta

        }else{
            velocidadeAtual = valocidadeMaxima
        }
    }


    // metodo publico
    this.getVelocidadeAtual = function () {

        return velocidadeAtual
      }
    
}


const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())