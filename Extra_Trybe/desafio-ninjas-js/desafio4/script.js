const fruta = document.querySelectorAll('.fruta');
const btn = document.querySelector('button');

// const arrayFruits = Array.prototype.slice.call(fruta);
const fruitNames = [...fruta]
  .map((fruit) => fruit.innerHTML)
  .sort()
  .reverse();

btn.addEventListener('click', () => alert(fruitNames));
