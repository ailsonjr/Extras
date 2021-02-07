//​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
  let resultado = dividendo / divisor;
  return `O resultado da divisão de ${dividendo} por ${divisor} é igual a ${resultado}`
}

console.log(divisao(10,5));
console.log(divisao(10,2));
console.log(divisao(50,5));
console.log(divisao(14,2));

/* Gabarito 

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

*/
