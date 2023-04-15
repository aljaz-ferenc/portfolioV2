import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
        <nav className='navigation'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='projects'>Projects</NavLink>
            <NavLink to='tools'>Tools</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </nav>
    </header>
  )
}
