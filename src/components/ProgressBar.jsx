import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {
    const [viewport, setViewport] = useState(innerWidth)
    const { scrollYProgress } = useScroll(0)    
    const scaleX = useTransform(scrollYProgress, [0,1], [0, viewport])

    addEventListener('resize', () => {
        setViewport(innerWidth)
    })

  return <motion.div 
  className="progress-bar"
  style={{width: scaleX}}
  />;
}
