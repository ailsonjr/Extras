let hour = Math.round(Math.random() * (24 - 1)) + 1;

let now = new Date();

// hour = now.getHours();

console.log(`It is ${hour} o'clock.`);
if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 17) {
  console.log('Good Afternoon!');
} else if (hour < 21) {
  console.log('Good evening!');
} else {
  console.log('Good nigth!')
}