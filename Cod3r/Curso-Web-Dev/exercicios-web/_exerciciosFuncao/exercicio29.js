// ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

let randomArrayLength = Math.round(Math.random() * (15 - 3)) + 3;

function randomArray() {
  let array = [];

  for (let i = 0; i < randomArrayLength; i += 1) {
    let random = Math.round(Math.random() * 40)
    if (array.length === 0){
      array.push(random);
    } else if (array.indexOf(random) === -1) {
      array.push(random);
    } else {
      i -= 1;
    }
  }

  return array;
}

let newArray = randomArray().sort((a, b) => a - b);

function howManyBetween10And20(array) {
  let qtd = 0;

  for (let i in array) {
    if (array[i] >= 10 && array[i] <= 20) {
      qtd += 1;
    }
  }
  
  return `The array [${array}] have ${qtd} number(s) between 10 and 20.`
}

console.log(howManyBetween10And20(newArray));


/* Gabarito

function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} nÃºmeros dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))

*/