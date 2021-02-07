// ​ ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let randomArrayLength = Math.round(Math.random() * (12 - 3)) + 3;

function randomArray() {
  let array = [];

  for (let i = 0; i < randomArrayLength; i += 1) {
    let random = Math.round(Math.random() * 100);
    
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

let newArray = randomArray();

function highestAndLowest(array) {
  array.sort((a, b) => a - b);
  
  let highest = array[array.length - 1];
  let lowest = array[0];
  
  return `The highest number in the array [${newArray}] is ${highest} and the lowest number is ${lowest}.`
}

console.log(highestAndLowest(newArray));

/* Gabarito

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))

*/
