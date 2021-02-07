/* ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

let randomArrayLength = Math.round(Math.random() * (6 - 3)) + 3;

function randomArray() {
  let array = [];

  for (let i = 0; i < randomArrayLength; i += 1) {
    let random = (Math.random() * 10).toFixed(1);
    
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

function gradesConverter(grades) {
  let gradesConverted = [];

  for (let i = 0; i < grades.length; i += 1) {
    if(grades[i] < 5) {
      gradesConverted.push('D');
    } else if (grades[i] < 7) {
      gradesConverted.push('C');
    } else if (grades[i] < 9) {
      gradesConverted.push('B');
    } else {
      gradesConverted.push('A');
    }
  }
  return `The grades ${grades} was converted to ${gradesConverted}`;
}

console.log(gradesConverter(randomArray()));


/* Gabarito

function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota invÃ¡lida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)

*/