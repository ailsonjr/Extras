/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console. */

function whichFruit(fruit) {
  switch (fruit) {
    case 'Maçã':
      console.log('Não vendemos esta fruta aqui');
      break;
    case 'Kiwi':
      console.log('Estamos com escassez de kiwis');
      break;
    case 'Melancia':
      console.log('Aqui está, são 3 reais o quilo');
      break;
    default:
      console.log('Não é uma fruta válida');
  }
}

whichFruit('Maçã');
whichFruit('Kiwi');
whichFruit('Melancia');
whichFruit('Banana');


/* Gabarito

function venderFruta (fruta) {
  switch (fruta) {
      case 'maÃ§Ã£':
          console.log('NÃ£o vendemos esta fruta aqui.')
          break
      case 'kiwi':
          console.log('Estamos com escassez de kiwi.')
          break
      case 'melancia':
          console.log('Aqui estÃ¡, custa R$ 3,00 o quilo.')
          break
      default:
          console.log('Erro, fruta invÃ¡lida.')
  }
}

venderFruta('maÃ§Ã£')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')

*/