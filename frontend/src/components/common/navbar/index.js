import React from 'react'
import Logo from '../logo';
import './style.css'

const Navbar = () => {
    return <nav class="navbar bg-body-tertiary navbar__main">
        <div className='d-flex align-items-center '>
            <a class="navbar-brand" href="#">
                <div style={{ width: 250 }}>
                    <Logo />
                </div>
            </a>
        </div>
    </nav>
}

export default Navbar;