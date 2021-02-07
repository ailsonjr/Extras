/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , bem como a soma dos elementos. */

function arithmeticProgression (n, a1, r) {
  let array = [a1];
  let sum = a1;

  for (let i = 1; i < n; i += 1) {
    a1 = a1 + r;
    array.push(a1);
    sum += a1;
  }
  return `term = ${n}, first number = ${array[0]}, reason ${r}, terms = ${array} and the sum = ${sum} `
}

function geometryProgression (n, a1, r) {
  let array = [a1];
  let sum = a1;

  for (let i = 1; i < n; i += 1) {
    a1 = a1 * r;
    array.push(a1);
    sum += a1;
  }
  return `term = ${n}, first number = ${array[0]}, reason ${r}, terms = ${array} and the sum = ${sum} `
}

console.log(arithmeticProgression(10, 10, 15));
console.log(geometryProgression(10, 5, 3));

/* Gabarito

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)

*/