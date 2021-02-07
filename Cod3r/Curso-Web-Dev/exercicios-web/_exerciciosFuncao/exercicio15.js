/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”. */

function whichCar(car) {
  switch (car) {
    case 'hatch':
      console.log('Compra efetuada com sucesso!');
      break;
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      console.log('Tem certeza que não prefere este modelo?');
      break;
    default:
      console.log('Não trabalhamos com esse tipo de automóvel aqui.')
  }
}

whichCar('hatch');
whichCar('sedan');
whichCar('motocicleta');
whichCar('caminhonete');
whichCar('SUV');


/* Gabarito

function escolherCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que nÃ£o prefere este modelo?'
        default:
            return 'NÃ£o trabalhamos com este tipo de automÃ³vel aqui.'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));


*/