let age = Math.round(Math.random() * (80 - 15)) + 15;

console.log(`Your age is ${age} years`);
if (age < 16) {
  console.log(`You don't vote`)
} else if (age < 18 || age > 65) {
  console.log('Optional vote!')
} else {
  console.log('Mandatory vote');
}