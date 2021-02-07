const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsista = (resultado, aluno) => resultado && aluno;
const bolsistas = alunos.map(aluno => aluno.bolsista);
console.log(bolsistas.reduce(todosBolsista));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, aluno) => resultado || aluno;
console.log(bolsistas.reduce(algumBolsista));
