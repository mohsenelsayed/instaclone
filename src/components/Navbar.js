import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Navlinks from './Navlinks'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-content'>
            <Logo />
            <Searchbar />
            <Navlinks />
            
        </div>
    </nav>
  )
}

export default Navbar