// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function makeid(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makeid2(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
} // Fonte: https://qastack.com.br/programming/1349404/generate-random-string-characters-in-javascript 

let randomNumber = Math.round(Math.random() * (6 - 3)) + 3;
let randomNumber2 = Math.round(Math.random() * (6 - 3)) + 3;

function comparingStrings(string1, string2) {
  let state = true;
  let str1 = string1.toUpperCase();
  let str2 = string2.toUpperCase();

  for (let i in str1) {
    
    for (let j in str2) {
      if (str1[i] === str2[j]) {
        state = true;
        break;
      } else {
        state = false;
      }
    }

    if (!state) {
      return state;
    }

  }

  return state;
}

let string = makeid(randomNumber);
let string2 = makeid2(randomNumber2);
console.log(string);
console.log(string2);
console.log(comparingStrings(string, string2));
console.log(comparingStrings('abc', 'bca'));


/* Gabarito

function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))

 

*/