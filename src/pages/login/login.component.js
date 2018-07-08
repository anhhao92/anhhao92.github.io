import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth.action';
import { Input, Label, Button, Alert } from 'reactstrap';
import './login.css';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    const { dispatch, history } = this.props;
    dispatch(loginUser(this.state, history));
    e.preventDefault();
  };

  render() {
    const { error } = this.props.auth;
    return (
      <div className="form-container d-flex align-items-center">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h3 className="text-center">Please sign in</h3>
          {error && <Alert color="danger">{error}</Alert>}
          <div className="form-group">
            <Label for="inputEmail" className="sr-only">
              Username
            </Label>
            <Input
              autoFocus
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
          </div>
          <div className="form-group">
            <Label for="inputPassword" className="sr-only">
              Password
            </Label>
            <Input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <Button color="primary" size="lg" block type="submit">
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps)(Login));
