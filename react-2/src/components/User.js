import React from 'react'
import { withRouter } from 'react-router-dom'
import { logout, isLogged } from '../services/loginService'

const logoutHandler = (e, props) => {
    e.preventDefault();
    logout()
    props.history.push('/')
}

const User = ( props ) => {
    if(!isLogged()) {
        props.history.push('/')
    }
return (
    <button onClick={(e) => logoutHandler(e, props)} className="btn">Logout</button>
)}

export default withRouter(User)