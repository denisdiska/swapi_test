import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { LinkedIn } from 'react-linkedin-login-oauth2'
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

class Login extends Component {
  state = {
    code: '',
    errorMessage: '',
  }

  handleSuccess = data => {
    this.setState({
      code: data.code,
      errorMessage: '',
    })
    // document.cookie = `name=${data.code}`
  }

  handleFailure = error => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    })
  }
  render() {
    const { code, errorMessage } = this.state

    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LinkedIn
          clientId="785n6stld8xld7"
          redirectUri={`${window.location.origin}/linkedin`}
          scope="r_emailaddress"
          state="34232423"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          supportIE
          redirectPath="/linkedin"
        >
          <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {/* {!code && <div>No code</div>} */}
        {code && <Redirect to={{ pathname: '/', propsSearch: { code: this.state.code } }} />}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    )
  }
}

export default Login

// import React from 'react'

// export default function Login() {
//   return (
//     <div>
//       <p>I am Login</p>
//     </div>
//   )
// }
