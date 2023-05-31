import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
<<<<<<< HEAD
=======
      {/* <a href="/" className='site-title'>Site Name</a> */}
>>>>>>> 0441ad3232a903d7cd32192bd48d813a6268e9da
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
