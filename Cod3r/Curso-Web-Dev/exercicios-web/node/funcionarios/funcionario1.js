const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

let chineses = funcionario =>funcionario.pais === 'China';
let mulher = funcionario => funcionario.genero === 'F';
let menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
};


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salário?
    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulher)
        .reduce(menorSalario);

    console.log(funcionario)
})