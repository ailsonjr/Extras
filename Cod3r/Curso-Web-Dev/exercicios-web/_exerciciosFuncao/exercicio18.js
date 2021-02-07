/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

let randomNumber = Math.round(Math.random() * 11);

function numberInFull(number) {
  switch (number) {
    case 0:
      console.log('zero');
      break;
    case 1:
      console.log('one');
      break;
    case 2:
      console.log('two');
      break;
    case 3:
      console.log('three');
      break;
    case 4:
      console.log('four');
      break;
    case 5:
      console.log('five');
      break;
    case 6:
      console.log('six');
      break;
    case 7:
      console.log('seven');
      break;
    case 8:
      console.log('eigth');
      break;
    case 9:
      console.log('nine');
      break;
    case 10:
      console.log('ten');
      break;
    default:
      console.log('Number out of range')
  }
}

numberInFull(randomNumber);

/* Gabarito

function numeroPorExtenso(numero) {
  switch (numero) {
      case 0:
          console.log('Zero')
          break
      case 1:
          console.log('Um')
          break
      case 2:
          console.log('Dois')
          break
      case 3:
          console.log('TrÃªs')
          break
      case 4:
          console.log('Quatro')
          break
      case 5:
          console.log('Cinco')
          break
      case 6:
          console.log('Seis')
          break
      case 7:
          console.log('Sete')
          break
      case 8:
          console.log('Oito')
          break
      case 9:
          console.log('Nove')
          break
      case 10:
          console.log('Dez')
          break
      default:
          console.log('Numero fora do intervalo.')
  }
}

numeroPorExtenso(0)
numeroPorExtenso(1)
numeroPorExtenso(2)
numeroPorExtenso(3)
numeroPorExtenso(4)
numeroPorExtenso(5)
numeroPorExtenso(6)
numeroPorExtenso(7)
numeroPorExtenso(8)
numeroPorExtenso(9)
numeroPorExtenso(10)
numeroPorExtenso(11)

*/