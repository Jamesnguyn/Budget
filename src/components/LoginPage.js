import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='layout__title'>Budget</h1>
      <p>Lets manage our finances!</p>
      <button
        className='button'
        onClick={startLogin}
      >
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);