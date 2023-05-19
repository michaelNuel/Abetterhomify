import React from 'react'
import { NavLink } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      <NavLink>Sign in with Google</NavLink>
      <NavLink to={"signup"}>Create an account</NavLink>
    </div>
  )
}

export default Signin
