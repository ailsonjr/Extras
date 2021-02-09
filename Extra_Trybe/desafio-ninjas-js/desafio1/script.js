async function intelList() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=intel';
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  return responseJson.results;
}

async function createList() {
  const ol = document.querySelector('#Intel');
  const list = await intelList();
  
  return list.map((item) => {
    const li = document.createElement('li');
    li.innerHTML = item.title;
    ol.appendChild(li);
  })
}

createList();
