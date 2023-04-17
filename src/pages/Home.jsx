import React from 'react'
import Hero from '../components/Hero'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    className="App" 
    id="app"
    exit={{y:"100vh", transition: {duration: 0.5, ease: 'easeInOut'}}}
    >
      <Hero />
    </motion.div>
  )
}
