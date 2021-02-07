/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
 */

let randomNumber = Number(Math.round((Math.random() * (20 - 1))) + 1);
let randomNumber2 = Number(Math.round((Math.random() * (20 - 1))) + 1);

function randomArray() {
  let array = [];
  let arrayLength = Math.round(Math.random() * (8 - 3)) + 3;

  for (let i = 0; i < arrayLength; i += 1) {
    let random = Number(Math.round(Math.random() * 50));
    
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

function randomArray2() {
  let array2 = [];
  let arrayLength = Math.round(Math.random() * (8 - 3)) + 3;

  for (let i = 0; i < arrayLength; i += 1) {
    let random = Number(Math.round(Math.random() * 50));
    
    if (array2.length === 0){
      array2.push(random);
    } else if (array2.indexOf(random) === -1) {
      array2.push(random);
    } else {
      i -= 1;
    }

  }

  return array2;
}

let arrayNumbers1 = randomArray();
let arrayNumbers2 = randomArray2();

function arrayMultiplier (array, number) {
  let newArray = [];

  for (let i = 0;i < array.length; i += 1) {
    newArray.push(array[i] * number);
  }

  return newArray;
}

function arrayMultiplier2(array, number) {
  let newArray =[];

  if ( number > 5) {
    
    for (let i in array) {
      newArray.push(array[i] * number);
    }
  
  } else {
    return 'Number is less than 5';
  }
  return newArray;
}

console.log(randomNumber);
console.log(arrayNumbers1)
console.log(arrayMultiplier(arrayNumbers1, randomNumber));
console.log(randomNumber2);
console.log(arrayNumbers2)
console.log(arrayMultiplier(arrayNumbers2, randomNumber2));


/* Gabarito

let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))

*/