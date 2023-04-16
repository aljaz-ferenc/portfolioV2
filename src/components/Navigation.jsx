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
            <a href="https://blog-react-af.netlify.app/" target='_blank'>Blog</a>
        </nav>
    </header>
  )
}
