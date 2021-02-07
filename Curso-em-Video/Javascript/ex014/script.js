function load() {
  let msg = document.getElementById('message');
  let img = document.getElementById('photo');
  let body = document.body;
  
  let hour = new Date().getHours();
  msg.innerHTML = `It is ${hour} o'clock`;
  
  if (hour < 12) {
    img.src = 'morning.png';
    body.style.background = '#DECBCD';
  } else if (hour < 18) {
    img.src = 'afternoon.png'
    body.style.background = '#FFA900';
  } else {
    img.src = 'night.png';
    body.style.background = '#002B65';
  }
}