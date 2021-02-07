/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento:
  A     10%
  B     15%
  C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function increasePlan(salary, plan) {
  let newSalary = 0;
  switch (plan) {
    case 'A':
      newSalary = (salary * 1.1).toFixed(2);
      console.log(`R$ ${newSalary.replace('.',',')}`);
      break;
    case 'B':
      newSalary = (salary * 1.15).toFixed(2);
      console.log(`R$ ${newSalary.replace('.',',')}`);
      break;
    case 'C':
      newSalary = (salary * 1.2).toFixed(2);
      console.log(`R$ ${newSalary.replace('.',',')}`);
      break;
    default:
      console.log('Plano de trabalho inválido!')
  }
}

increasePlan(1500, 'A');
increasePlan(1500, 'B');
increasePlan(1500, 'C');
increasePlan(1500, 'D');


/* Gabarito

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano invÃ¡lido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));

*/