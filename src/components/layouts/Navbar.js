import React from 'react'
import PropTypes from 'prop-types'



const Navbar =({icon, title})=> {
        return (
            <nav className="navbar bg-primary">
                <h1><i className={icon}/>{title}
                    Navbar
                </h1>
            </nav>
        )
    
}

  Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github m-1'
    };
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
export default Navbar
