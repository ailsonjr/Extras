import React from 'react';
import './Card.css'

export default class Card extends React.Component {
  render() {
    const estilo = {
      backgroundColor: this.props.color || '#F00',
      borderColor: this.props.color || '#F00'
    }
    return (
      <div className='Card' style={estilo}>
        <div className='Title'>{this.props.titulo}</div>
        <div className='Content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}