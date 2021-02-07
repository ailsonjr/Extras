// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

let growthRate = Math.round(Math.random() * (13 - 5)) + 5;
let growthRate2 = Math.round(Math.random() * (13 - 5)) + 5; 
let randomHeigth = Math.round(Math.random() * (160 - 50)) + 50;
let randomHeigth2 = Math.round(Math.random() * (160 - 50)) + 50; 

function heigthComparison (heigth1, heigth2, rate1, rate2) {
  let years = 0;
  let child = '';
  console.log(heigth1, heigth2, rate1, rate2)

  if (heigth1 === heigth2) {
   return 'Both children have the same heigth.';
  } else {
    if (heigth1 < heigth2) {
      while (years < 12 && heigth1 < heigth2) {
        years += 1;
        heigth1 += rate1;
        heigth2 += rate2;
      }
      child = 'first child';
    } else {
        while (years < 12 && heigth2 < heigth1) {
          years += 1;
          heigth1 += rate1;
          heigth2 += rate2;
        }
        child = 'second child';
      }
    }
  if (years === 12) {
    return 'The youngest not supress the older child'
  } else {
    return `The ${child} will overtake the other child in ${years} years`;
  }
}

console.log(heigthComparison(randomHeigth, randomHeigth2, growthRate, growthRate2));


/* Gabarito

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A crianÃ§a 1 ultrapassarÃ¡ a crianÃ§a 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A crianÃ§a 2 ultrapassarÃ¡ a crianÃ§a 1 em 1 ano.'
        }else{
            return 'As crianÃ§as tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A crianÃ§a menor nÃ£o ultrapassarÃ¡ a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A crianÃ§a menor nÃ£o ultrapassarÃ¡ a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));

*/