/* ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar. */

let randomArrayLength = Math.round(Math.random() * (6 - 3)) + 3;

function randomArray() {
  let array = [];

  for (let i = 0; i < randomArrayLength; i += 1) {
    let random = Math.round(Math.random() * 50);
    
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
  let array = [];

  for (let i = 0; i < randomArrayLength; i += 1) {
    let random = Math.round(Math.random() * 50);
    
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

function arrayExchange(array1, array2) {
  let arrays = array1.concat(' and ', array2);

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i += 1) {
      array1[i] = array1[i] + array2[i];
      array2[i] = array1[i] - array2[i];
      array1[i] = array1[i] - array2[i];
    }
    return `The arrays was ${arrays} and now are ${array1} and ${array2}`
  } else {
    return 'Arrays are not the same size.'
  }
}

console.log(arrayExchange(randomArray(), randomArray2()));


/* Gabarito

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)

*/