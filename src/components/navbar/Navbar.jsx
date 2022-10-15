import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to ="/" className='nav-NavLink'>Home</NavLink>
      <NavLink to ="/blogs" className='nav-NavLink'>Blogs</NavLink>
      <NavLink to ="/contact" className='nav-NavLink'>Contact</NavLink>
    </nav>
  )
}

export default Navbar
