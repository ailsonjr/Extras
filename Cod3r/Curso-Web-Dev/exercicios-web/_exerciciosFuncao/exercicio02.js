//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function tipoTriangulo (base, altura, hipotenusa){
  if (base === altura && altura === hipotenusa) {
    return "Triângulo Equilátero";
  } else if (base === altura || base === hipotenusa || altura === hipotenusa) {
    return "Triângulo Isóceles";
  } else {
    return "Triângulo Escaleno"
  }
}

console.log(tipoTriangulo(5, 5, 5));
console.log(tipoTriangulo(5, 5, 8));
console.log(tipoTriangulo(3, 5, 8));

/* Gabarito

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'EquilÃ¡tero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'IsÃ³sceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

*/