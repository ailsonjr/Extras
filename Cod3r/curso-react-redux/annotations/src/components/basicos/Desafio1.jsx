import React from 'react';

export default class Desafio1 extends React.Component {
  render() {
    const { max, min } = this.props;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      <div>
        <h2>Número aleatório</h2>
        <p>{ random }</p>
      </div>
    )
  }
}
