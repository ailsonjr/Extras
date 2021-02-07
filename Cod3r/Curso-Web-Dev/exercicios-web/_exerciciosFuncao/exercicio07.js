/*​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

function formulaDeBhaskara(a, b, c) {
  let delta = ((b ** 2) - 4 * a * c)
  let equacao1 = Math.round(((- b + delta ** 0.5) / 2 * a) * 100) / 100;
  let equacao2 = Math.round(((- b - delta ** 0.5) / 2 * a) * 100) / 100;
  if (delta < 0) {
     return 'Delta é negativo'; 
    } else {
      return [equacao1, equacao2];
    }
}

console.log(formulaDeBhaskara(2, 10, 4));
console.log(formulaDeBhaskara(2, 6, 4));
console.log(formulaDeBhaskara(3, 10, 8));
console.log(formulaDeBhaskara(2, 2, 4));

/* Gabarito 

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

*/