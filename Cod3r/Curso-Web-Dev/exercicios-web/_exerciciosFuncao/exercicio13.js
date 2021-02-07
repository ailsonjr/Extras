/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

 let randomWeekDay = Math.round(Math.random() * (7 - 1)) + 1;

 function whichDayOfTheWeek(day) {
   switch (day) {
     case 1:
       console.log('Domingo é dia de final de semana.');
       break;
     case 2:
        console.log('Segunda é dia útil.');
        break;
     case 3:
        console.log('Terça é dia útil.');
        break;
     case 4:
        console.log('Quarta é dia útil.');
        break;
     case 5:
        console.log('Quinta é dia útil.');
        break;
     case 6:
        console.log('Sexta é dia útil.');
        break;
     case 7:
        console.log('Sábado é dia de final de semana.');
        break;
     default:
        console.log('O dia inserido não é válido!')
   }
    
 }

 whichDayOfTheWeek(randomWeekDay);


/* Gabarito

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia Ãºtil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia invÃ¡lido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));


*/