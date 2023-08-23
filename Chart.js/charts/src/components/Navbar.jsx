import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{padding : '20px', display : 'flex', justifyContent : 'space-between', backgroundColor: 'teal'}}>
        <Link to={'/'}>Bar Graph</Link>
        <Link to={'/stackBar'}>Stack Bar</Link>
        <Link to={'/groupStack'}>Group Stack</Link>
    </div>
  )
}

export default Navbar;