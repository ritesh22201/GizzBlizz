import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>Bar Graph</Link>
        <Link to={'/stackBar'}>Stack Bar</Link>
    </div>
  )
}

export default Navbar;