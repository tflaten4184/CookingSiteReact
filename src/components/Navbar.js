import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      {/* <a href="/" className='site-title'>Site Name</a> */}
      <Link to={'/'}>Site Name</Link>
      <ul>
        <li>
            <Link to={'/favorites/'}>Favorites</Link>
        </li>
        <li>
            <Link to={'/about/'}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
