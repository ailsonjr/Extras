import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class Home extends Component {
  render() {
    const { isLogged } = this.props;
    return (
      <>
        {!isLogged ? <Login /> : <h2>Bem vindo</h2>}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
})

export default connect(mapStateToProps)(Home);
