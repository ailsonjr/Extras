function check() {
  let currentYear = new Date().getFullYear();
  let formYear = document.getElementById('ipt-age').value;
  let result = document.querySelector('#result');

  if (formYear.length === 0 || formYear > currentYear) {
    alert('[ERROR] Check the data and try again!');
  } else {
    let sex = document.getElementsByName('sex-radio');
    let age = currentYear - Number(formYear);
    let gender = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'photo');

    if (sex[0].checked) {
      gender = 'Man';
      if (age >= 0 && age < 10) {
        img.setAttribute('src', 'boy.png');
      } else if (age < 21) {
        img.setAttribute('src', 'young-man.png');
      } else if (age < 50) {
        img.setAttribute('src', 'man.png');
      } else {
        img.setAttribute('src', 'old-man.png');
      }
    } else if (sex[1].checked) {
      gender = 'Woman';
      if (age >= 0 && age < 10) {
        img.setAttribute('src', 'girl.png');
      } else if (age < 21) {
        img.setAttribute('src', 'young-woman.png');
      } else if (age < 50) {
        img.setAttribute('src', 'woman.png');
      } else {
        img.setAttribute('src', 'old-woman.png');
      }
    }
    result.style.textAling = 'center';
    result.innerHTML = `We detect ${gender} with ${age} years old.`
    result.appendChild(img);
  }
} 