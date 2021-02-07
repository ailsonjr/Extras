Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i+= 1){
        if (callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
const expansive = product => product.preco > 2000;
const fragile= product => product.fragil; // não precisa comparar com nada pois o valor dele é booleano

const productsFilter = produtos.filter2(fragile).filter2(expansive);

console.log(productsFilter);