import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, saveUserInfo } from '../../actions/auth.action';
import { Input, Label, Button, Alert } from 'reactstrap';

import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import FaQuestionCircleO from 'react-icons/lib/fa/question-circle';

import { firebase } from '../../configs/firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import classes from './login.module.scss';

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

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
        signInSuccessWithAuthResult: result => {
          const id = result.additionalUserInfo.profile.id;
          saveUserInfo(id, result);
          return false;
        },
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

  renderAction() {
    return (
      <Dropdown
        className={classes.menuAction}
        direction="left"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle nav caret>
          <FaQuestionCircleO />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Available Features</DropdownItem>
          <DropdownItem>
            <Link to="/tools">GROSS &amp; NET Calculation</Link>
          </DropdownItem>
          <DropdownItem disabled>Request Feature</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/profile">My Profile</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const { error } = this.props;
    return (
      <div className={classes.formContainer}>
        {this.renderAction()}
        <form className={classes.formSignIn} onSubmit={this.onSubmit}>
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
