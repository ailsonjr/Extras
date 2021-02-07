/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capital, juros, tempo) {
  let totalJuros = juros * tempo;
  let resultado = capital * (1 + (totalJuros / 100));
  return resultado;
} 

function jurosCompostos(capital, juros, tempo) {
  let totalJuros =  1 + (juros / 100);
  let resultado = capital * (totalJuros ** tempo);
  return resultado; 
}


function comparacaoDeAplicacao(capital, juros, tempo) {
  let capitalCurrency = capital.toFixed(2).replace('.',',');
  let jurosAA = juros / 12;
  let jSimples = jurosSimples(capital, jurosAA, tempo)
                    .toFixed(2).replace('.',',');
  let jComposto = jurosCompostos(capital, jurosAA, tempo)
                    .toFixed(2).replace('.',',');
  return `Se você aplicar R$${capitalCurrency}, por ${tempo} meses com ${juros}% a.a. terá:
  R$${jSimples} de rendimento com juros simples ou R$${jComposto} com juros compostos`
}

console.log(comparacaoDeAplicacao(800, 60, 8));

console.log(jurosCompostos(800, 5, 8))

/* Gabarito

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

*/