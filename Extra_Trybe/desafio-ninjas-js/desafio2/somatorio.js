// eslint-disable-next-line import/no-unresolved
const lista = require('./lista.json');

const listaPrecos = lista.map((produto) => parseFloat((produto.price).substring(2)));

const total = listaPrecos.reduce((prev, next) => prev + next);

console.log(total);
