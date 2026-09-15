import React from 'react'

const ErrorPage = (props) => {
  return (
    <div>
        <h3>Error Error Error</h3>
        <h4>Error Message: {props?.error?.message}</h4>
    </div>
  )
}

export default ErrorPage