import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{padding : '20px', display : 'flex', justifyContent : 'space-between', backgroundColor: 'teal'}}>
        <Link style={{color : 'white', fontWeight : 'bold', textDecoration : 'none'}} to={'/'}>Bar Graph</Link>
        <Link style={{color : 'white', fontWeight : 'bold', textDecoration : 'none'}} to={'/stackBar'}>Stack Bar</Link>
        <Link style={{color : 'white', fontWeight : 'bold', textDecoration : 'none'}} to={'/groupStack'}>Group Stack</Link>
        <Link style={{color : 'white', fontWeight : 'bold', textDecoration : 'none'}} to={'/line'}>Line Graph</Link>
        <Link style={{color : 'white', fontWeight : 'bold', textDecoration : 'none'}} to={'/area'}>Area Graph</Link>
    </div>
  )
}

export default Navbar;