import React from 'react'
import Mouse from '../components/Mouse'
import ProgressBar from '../components/ProgressBar'
import Hero from '../components/Hero'
import Tools from '../components/Tools'
import ToolsMobile from '../components/ToolsMobile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    className="App" 
    id="app"
    exit={{y:"100vh", transition: {duration: 0.5}}}
    >
      <ProgressBar/>
      <Hero />
      {/* <ToolsMobile /> */}
    </motion.div>
  )
}
