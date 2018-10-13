console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)

// 1º Maneira
console.log(typeof new Produto)

//2 º Maneira
console.log(typeof new Produto())