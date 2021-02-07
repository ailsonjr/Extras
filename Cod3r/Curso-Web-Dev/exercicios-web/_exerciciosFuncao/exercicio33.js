/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

function randomArray() {
  let array = [];

  for (let i = 0; i < 4; i += 1) {
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

function constructorArrayDouble() {
  let array = [];

  for (let i = 0; i < 4; i += 1) {
    let random = Number(Math.random().toFixed(2));
    
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

let arrayInteger = randomArray();
let arrayDouble = constructorArrayDouble();
let arrayString = constructorArrayString();

function constructorArrayString() {
  array = [];

  for (let i = 0; i < 4; i += 1) {
    let random = Math.round(Math.random() * 10);
    
    if (array.length === 0){
      array.push(random);
    } else if (array.indexOf(random) === -1) {
      array.push(random);
    } else {
      i -= 1;
    }

  }

  let arrayString = [];

  for (let i in array) {
    switch (array[i]) {
      case 0:
        arrayString.push('zero');
        break;
      case 1:
        arrayString.push('one');
        break;
      case 2:
        arrayString.push('two');
        break;
      case 3:
        arrayString.push('three');
        break;
      case 4:
        arrayString.push('four');
        break;
      case 5:
        arrayString.push('five');
        break;
      case 6:
        arrayString.push('six');
        break;
      case 7:
        arrayString.push('seven');
        break;
      case 8:
        arrayString.push('eigth');
        break;
      case 9:
        arrayString.push('nine');
        break;
      default:
        arrayString.push('ten');
    }
  }
  return arrayString;
}

console.log(arrayInteger);
console.log(arrayDouble)
console.log(arrayString);
console.log(arrayInteger.concat(arrayDouble, arrayString));
console.log(arrayInteger.concat(arrayDouble));

/* Gabarito 

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
  resultado = []
  for(let i = 0; i<arguments.length; i++){
    resultado = resultado.concat(arguments[i])
  }
  return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

*/