import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import logo from '../logo.svg';

const Navbar = ({
    searchString,
    ...props
}) => {
    console.log(searchString)
 return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand col-1">
            <img src={logo} className="Navbar-logo" alt="logo" />
        </div>

        <div className="form-group justify-content-center row col-10 my-2">
            <input
                value={searchString}
                onChange={(e) => searchInputChangeHandler(e, props)}
                // TODO: onChange deve atualizar a URL 
                className="form-control col-9 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </div>
    </nav>
)}

Navbar.propTypes = {
    searchString: PropTypes.string
}

const searchInputChangeHandler = (e, props) => {
    props.history.push(`/${e.target.value}`);
}

export default withRouter(Navbar);
