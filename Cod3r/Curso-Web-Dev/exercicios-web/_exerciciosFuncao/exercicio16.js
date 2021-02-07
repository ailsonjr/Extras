/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculatorWithSwitch(num1, operation, num2) {
  switch (operation) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log((num1 / num2).toFixed(2));
      break;
    default:
      console.log('Sinal de operador inserido inválido!');
  }
}

calculatorWithSwitch(10, '+', 5);
calculatorWithSwitch(10, '-', 5);
calculatorWithSwitch(10, '*', 5);
calculatorWithSwitch(12, '/', 5);
calculatorWithSwitch(10, '%', 5);

/* Gabarito

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'OperaÃ§Ã£o invÃ¡lida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));

*/