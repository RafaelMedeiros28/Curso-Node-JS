const calculadora = require('./calculadora');

console.log(calculadora.somar(23, 890));
console.log(calculadora.dividir(234, 8));
console.log(calculadora.potencia(2, 21));
console.log(calculadora.subtrair(45, 12));
console.log(calculadora.mult(23, 2));
let cachorroIdade = calculadora.somar(12, 6);

let cachorroFilhos = calculadora.dividir(cachorroIdade, 3);

console.log(cachorroFilhos);