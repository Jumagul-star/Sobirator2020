import React from 'react'
import { Redirect } from 'react-router-dom'
// import { isAuthUser } from '../helpers/authutils'

function index() {
    // if(!isAuthUser())return <Redirect to="auth/login"/>;
    return <Redirect to="/home"/>;
}

export default index
