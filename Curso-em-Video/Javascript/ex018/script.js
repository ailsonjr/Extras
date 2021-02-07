let arrayNumbers = [];
let select = document.querySelector('#select-box');
let section = document.querySelector('#section');
let result = document.createElement('div');
result.className = 'result'
section.appendChild(result);

function add() {
  let num = document.querySelector('#input-number');
  let number = num.value;
  result.innerHTML = '';

  if (number < 1 || number > 100  || (arrayNumbers.length > 0 && arrayNumbers.indexOf(number) !== -1)) {
    alert('Invalid number or is already in the list');
  } else {
    arrayNumbers.push(number);
    let item = document.createElement('option');
    select.appendChild(item);
    item.innerHTML += `Number ${number} added`;
  }
  num.value = '';
  num.focus();
}

function total() {
  let total = 0;
  for (let i in arrayNumbers) {
    total += Number(arrayNumbers[i]);
  }
  return total;
}

function avarage () {
  return (total() / arrayNumbers.length);
}

function finish() {
  arrayNumbers.sort((a, b) => a - b);

  if (arrayNumbers.length === 0) {
    alert('Add numbers to te list before finish');
  } else {
    result.innerHTML = '';
    result.innerHTML = `<p>Altogether we have ${arrayNumbers.length} numbers registered.</p>
    <p>The largest number reported was ${arrayNumbers[arrayNumbers.length -1]}</p>
    <p>The smallest number informed was ${arrayNumbers[0]}</p>
    <p>Adding all numbers we have the value ${total()}</p>
    <p>The avarage of the numbers entered is ${avarage()}</p>`
  }

}