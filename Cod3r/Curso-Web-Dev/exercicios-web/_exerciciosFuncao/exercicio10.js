/* ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

let randomNumber = Math.round((Math.random() * (100 - 1)) + 1);

function divisibleFor3(number) {
  console.log(number);
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisibleFor3(randomNumber));

/* Gabarito

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))

*/