import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth.action';
import { Input, Label, Button, Alert } from 'reactstrap';
import { firebase } from '../../configs/firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import './login.css';

let authUi = null;

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

  componentWillUpdate(nextProps) {
    const { history, returnUrl } = this.props;
    if (nextProps.isAuthenticated) {
      history.push(returnUrl ? returnUrl : '/');
    }
  }

  componentDidMount() {
    const authConfig = {
      callbacks: {
        signInSuccessWithAuthResult: () => false,
        signInFailure: error => console.log(error)
      },
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
      ],
      signInFlow: 'popup',
      signInSuccessUrl: '/'
    };
    authUi = new firebaseui.auth.AuthUI(firebase.auth());
    authUi.start('#auth-container', authConfig);
  }

  componentWillUnmount() {
    authUi.delete();
  }

  render() {
    const { error } = this.props;
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
          <div id="auth-container" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  returnUrl: state.auth.returnUrl
});

export default withRouter(connect(mapStateToProps)(Login));
