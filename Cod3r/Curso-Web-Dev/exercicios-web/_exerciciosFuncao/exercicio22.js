/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

let randomMonth = (Math.round(Math.random() * (12 - 1)) + 1);
let randomAnnuity = Math.round(Math.random() * (10 - 3) + 3) * 100;

function compoundInterest(capital, interest, period){
  let totalInterest = 1 + (interest / 100);;
  let result = capital * (totalInterest ** period);
  return result;
}

function annuity(value, month){
  let monthInWriting = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let result = compoundInterest(value, 5, month);
  let convertedValue = value.toFixed(2).replace('.', ',');
  let convertedResult = result.toFixed(2).replace('.', ',');
  return `The value of the annuity is U$${convertedValue}, the the payment month is ${monthInWriting[month]} and the amount to pay is U$${convertedResult}.`;
}

console.log(annuity(randomAnnuity, randomMonth));


/* Gabarito 

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês invá¡lido.'
    }
}

console.log(calcularValor(4, 100))

*/