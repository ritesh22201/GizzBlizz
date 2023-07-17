import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display : 'flex', justifyContent : 'space-around', padding : '10px 0', marginBottom : '20px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/posts'}>Posts</Link>
        <button>Logout</button>
    </div>
  )
}

export default Navbar;