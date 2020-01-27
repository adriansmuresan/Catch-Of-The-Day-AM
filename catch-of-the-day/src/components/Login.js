import React from 'react';
import PropTypes from 'prop-types';

const Login = () => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => this.props.authanticate("Github")}>
      Log In With GitHub
    </button>
    <button className="twitter" onClick={() => this.props.authanticate("Twitter")}>
      Log In With Twitter
    </button>
    <button className="facebook" onClick={() => this.props.authanticate("Facebook")}>
      Log In With Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authanticate: PropTypes.func.isRequired
};

export default Login;
