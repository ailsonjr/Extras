// ​ ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

let randomArrayLength = Math.round(Math.random() * (12 - 3)) + 3;

function randomArray() {
  let array = [];

  for (let i = 0; i < randomArrayLength; i += 1) {
    let random = Math.round(Math.random() * (-10 + 30)) - 10;
    
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
let negatives = 0;
let arrayNegatives = [];
for (let i in newArray){
  if (newArray[i] < 0) {
    negatives += 1;
    arrayNegatives.push(newArray[i]);
  }
}

console.log(newArray);
console.log(negatives);
console.log(arrayNegatives);


/* Gabarito

function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))

*/