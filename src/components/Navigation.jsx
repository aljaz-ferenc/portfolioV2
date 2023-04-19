import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
        <nav className='navigation'>
            <NavLink to='/'>About</NavLink>
            <NavLink to='projects'>Projects</NavLink>
            <NavLink to='tools'>My Stack</NavLink>
            <a href="https://blog-react-af.netlify.app/" target='_blank'>Blog</a>
            <NavLink to='contact'>Contact</NavLink>
        </nav>
    </header>
  )
}
