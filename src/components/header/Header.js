import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

export function Header() {
  return (
    <div className='wrap-nav'>
      <nav className='nav'>
        
        <div className='leftNav'>
          <Link to={'/'}>Home</Link>
        </div>
        <div className='rightNav'>
          <Link to={'/quest'}>Quest</Link>
        </div>

      </nav>
    </div>
  )
}
