function generate() {
  let number = Number(document.getElementById('number').value);
  let result = document.getElementById('result')
  let multiplication = 0;

  if (!number) {
    alert('Please enter a number')
  } else {
      result.innerHTML = '';
      for (let i = 0; i <= 10; i += 1){
      multiplication = i * number;
      let item = document.createElement('option');
      result.appendChild(item)
      item.innerHTML += `${number} x ${i} = ${multiplication}`
    }
  }
} 