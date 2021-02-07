// Faça um algoritmo que calcule o fatorial de um número.

function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i -= 1){
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));

/* Gabarito


function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(6))

*/