// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let randomArrayLength = Math.round(Math.random() * (20 - 5)) + 5;

function randomArray() {
  let array = [];
  for (let i = 0; i < randomArrayLength; i += 1) {
    array.push(Math.round(Math.random() * 200));
  }
  return array;
}

let newArray = randomArray().sort((a, b) => a - b);

function oddAndEven(array) {
  let pair = 0;
  let odd = 0;

  for ( let i in array) {
    if (array[i] % 2 === 0){
      pair += 1;
    } else {
     odd += 1;
    }
  }
  return `The array [${array}] have ${pair} number(s) pairs and ${odd} number(s) odds.`
}

console.log(oddAndEven(newArray));


/* Gabarito

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} nÃºmeros pares e ${qtdImpares} nÃºmeros Ã­mpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)

*/