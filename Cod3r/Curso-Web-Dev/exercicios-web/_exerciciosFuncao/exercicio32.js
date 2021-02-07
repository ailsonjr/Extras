// ​ ​Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.


function randomArray() {
  let randomArrayLength = Math.round(Math.random() * (12 - 3)) + 3;
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
let sum = 0;

for (let i in newArray) {
  sum += newArray[i];
}
let avarage = (sum / newArray.length).toFixed(2);

console.log(newArray);
console.log(avarage);

/* Gabarito

function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))

*/
