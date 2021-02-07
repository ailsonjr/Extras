//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores

function operadoresAritmeticos (num1, num2) {
  let soma = num1 + num2;
  let sub = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;
  let resultado = `soma = ${soma}, subtração = ${sub}, multiplicação = ${mult}, divisão = ${div}`;
  return resultado;
}

console.log(operadoresAritmeticos(10, 2));

/* Gabarito 

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)


*/