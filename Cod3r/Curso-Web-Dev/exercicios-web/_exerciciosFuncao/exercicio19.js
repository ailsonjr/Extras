/*  ​O cardápio de uma lanchonete é o seguinte:
Código          Descrição do Produto          Preço
 100              Cachorro Quente             R$ 3,00
 200            Hambúrguer Simples            R$ 4,00
 300              Cheeseburguer               R$ 5,50
 400                  Bauru                   R$ 7,50
 500              Refrigerante                R$ 3,50
 600                  Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente. */

let randomCode = (Math.round(Math.random() * (7 - 1)) + 1) * 100;
let randomQtd = Math.round(Math.random() * (10 - 1)) + 1;

function totalPrice(code, qtd) {
  let price = 0;
  let product = '';
  switch (code) {
    case 100:
      price = 3;
      product = 'Hot dog';
      total = (price * qtd).toFixed(2);
      console.log(`The code entered is ${product} and the quantity ordered was ${qtd}, totaling U$ ${total.replace('.',',')}`);
      break;
    case 200:
      price = 4;
      product = 'Hamburger';
      total = (price * qtd).toFixed(2);
      console.log(`The code entered is ${product} and the quantity ordered was ${qtd}, totaling U$ ${total.replace('.',',')}`);
      break;
    case 300:
      price = 5.5;
      product = 'Cheese-Burger';
      total = (price * qtd).toFixed(2);
      console.log(`The code entered is ${product} and the quantity ordered was ${qtd}, totaling U$ ${total.replace('.',',')}`);
      break;
    case 400:
      price = 7.5
      product = 'Bauru';
      total = (price * qtd).toFixed(2);
      console.log(`The code entered is ${product} and the quantity ordered was ${qtd}, totaling U$ ${total.replace('.',',')}`);
      break;
    case 500:
      price = 3.5;
      product = 'Soda';
      total = (price * qtd).toFixed(2);
      console.log(`The code entered is ${product} and the quantity ordered was ${qtd}, totaling U$ ${total.replace('.',',')}`);
    case 600:
      price = 2.8;
      product = 'Juice';total = (price * qtd).toFixed(2);
      console.log(`The code entered is ${product} and the quantity ordered was ${qtd}, totaling U$ ${total.replace('.',',')}`);
      break;
    default:
      console.log('Product code not registered')
  }
}

totalPrice(randomCode, randomQtd);

/* Gabarito

function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto nÃ£o existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))

*/