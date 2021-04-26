import React from 'react'

import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, children, ...rest }) => {
  const code = localStorage.getItem('linkedin_oauth2_state')

  return (
    <Route
      {...rest}
      render={props =>
        code ? (
          children || <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `/login`,
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  component: PropTypes.func,
}
export default PrivateRoute
