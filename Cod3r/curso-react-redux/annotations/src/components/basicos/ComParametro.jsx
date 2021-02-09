import React from 'react';

export default class ComParametro extends React.Component {
  render() {
    const { titulo, aluno, nota } = this.props;
    const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
      <div>
        <h2>{titulo}</h2>
        <p>
          O aluno <strong>{aluno}</strong> está com a nota {nota} e está {status}
        </p>
      </div>
    )
  }
}