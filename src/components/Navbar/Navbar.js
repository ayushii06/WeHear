import React, { useState } from 'react'
import user from '../../assets/svg/user.svg'
// import logo from '../../assets/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {

    return (
        <>
            <div className="navbar">
                {/* <div className="svg-sidebar">
                    <img alt="" id="bar" className="image-svg user" />
                </div> */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li> <Link to="/input">GetStarted</Link></li>
                </ul>

                <div className="visible">
                    {localStorage.getItem('token')?<Link to='/user'><img className="image-svg user" src={user} alt="" /></Link>:<Link to='/register'><img className="image-svg user" src={user} alt="" /></Link>}
                    </div>
{/* <div className="media-query" id="dropdown">
            <div className="navbar-container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Find Products</Link></li>
            </div>
        </div> */}
            </div>
        </>
    )
}

export default Navbar