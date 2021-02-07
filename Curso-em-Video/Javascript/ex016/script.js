 function counting() {
  let start = Number(document.getElementById('begin').value);
  let end = Number(document.querySelector('#end').value);
  let step = Number(document.querySelector('#step').value);
  let counting = document.querySelector('#counting');
  let result = document.createElement('p');
  counting.appendChild(result);
  result.innerHTML = '';

  if (!step || step === 0){
    alert('Invalid step, considering step with value 1');
    step = 1;
  }
  
  if (!start) {
    result.innerHTML = 'Impossible to count!'
  } else {
    for (let i = start; i <= end; i += step) {
      result.innerHTML += ` ${i}<span>&#128073;</span>`  
    }
    result.innerHTML += ' &#127937';
  }
 }