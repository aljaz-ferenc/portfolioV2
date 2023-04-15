import "../main.scss";
import { motion } from "framer-motion";
import Name from "./Name";
import Video from "./Video";
import { useEffect, useState } from "react";
import volumeOn from '../../public/icons/volume-on.svg'
import volumeOff from '../../public/icons/volume-off.svg'

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const [video, setVideo] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMuted(false)
  //   }, 100);
  //   setVideo(true)
  // }, [])

  const textVariants = {
    initialLeft: {
      x: 200,
      opacity: 0,
    },
    initialRight: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 5,
      },
    },
  };

  return (
    <div className="hero">
      {/* <div className="hero__overlay"></div> */}
      <div className="hero__volume-btns">
          {muted && <img onClick={() => setMuted(false)} src={volumeOn} alt="" />}
          {!muted && <img onClick={() => setMuted(true)} src={volumeOff}/>}
        </div>
      <Video muted={muted}/>
      <Name />
      <div className="hero__text">
        <motion.p
          variants={textVariants}
          initial="initialLeft"
          animate="animate"
          className="hero__para"
        >
          Welcome to my portfolio site! My name is Aljaz, and I am a self-taught
          frontend web developer with a passion for creating beautiful,
          user-friendly websites and web apps.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="initialRight"
          animate="animate"
          className="hero__para"
        >
          After working in a different field, I decided to pursue my dream of
          becoming a frontend web developer. I am motivated, driven, and willing
          to learn whatever it takes to succeed in this exciting and fast-paced
          industry. I believe that with hard work, dedication, and a strong
          commitment to learning, anything is possible.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="initialLeft"
          animate="animate"
          className="hero__para"
        >
          On my portfolio page, you will find examples of my work, including
          websites and apps I have designed and built from scratch. Every
          project contains links to it's GitHub repo and live page on Netlify.
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="initialRight"
          animate="animate"
          className="hero__para"
        >
          Thank you for taking the time to visit my portfolio site, and I look
          forward to connecting with you soon!
        </motion.p>
      </div>
    </div>
  );
}
