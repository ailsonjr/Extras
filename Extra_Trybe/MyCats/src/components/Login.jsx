import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../_store/actions';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: ''
    }
  
    this.handleEvent = this.handleEvent.bind(this);
  }
  
  handleEvent(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    const { text } = this.state;
    const { login } = this.props;
    return (
      <>
        <label>
          <h3>Qual o seu nome?</h3>
          <input type="text" value={text} onChange={this.handleEvent} />
          <button type='button' onClick={() => login(text)}>Próximo</button>
        </label>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (nome) => dispatch(loginAction(nome))
});

export default connect(null, mapDispatchToProps)(Login);
