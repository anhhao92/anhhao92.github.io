import React from 'react';
import { Route, Redirect} from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default class Login extends React.Component {
    state = {
        redirectToReferrer: false
      }
    
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
              }))
        })
    }
    render() {
        const { redirectToReferrer } = this.state
        if (redirectToReferrer === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div>
                Login
            </div>
        )
    }
  }