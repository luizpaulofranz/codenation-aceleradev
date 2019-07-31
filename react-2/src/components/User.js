import React from 'react'
import { withRouter } from 'react-router-dom'
import { logout } from '../services/loginService'

const logoutHandler = (props) => {
    logout()
    props.history.push('/')
}

const User = ( props ) => {
return (
    <button onClick={() => logoutHandler(props)} className="btn">Logout</button>
)}

export default withRouter(User)