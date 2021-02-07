//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exponenciacao(base, expoente) {
  let resultado = base;
  for(let i = 1; i < expoente; i += 1) {
    resultado = resultado * base;
  } 
  return `O resultado da exponenciação do número ${base} pelo expoente ${expoente} é: ${resultado}`;
}

console.log(exponenciacao(2 ,2));
console.log(exponenciacao(2 ,3));
console.log(exponenciacao(2 ,4));
console.log(exponenciacao(3 ,2));
console.log(exponenciacao(3 ,3));


/* Gabarito

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Metodo antigo:
    let resultado = Math.pow(base, expoente)
    //Metodo novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

*/