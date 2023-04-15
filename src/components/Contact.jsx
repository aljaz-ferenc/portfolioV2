import React from "react";
import "../main.scss";
import { motion } from "framer-motion";

export default function Contact() {
  const formVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };


  return (
    <motion.div 
    className="contact-container"
    exit={{y:"100vh", transition: {duration: 0.5}}}
    initial={{x:"-100vw"}}
    animate={{x:0}}
    >
      <h2 className="contact__heading">Contact</h2>
      <motion.form
        variants={formVariants}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="contact"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          If you have any questions, don't hesitate to contact me. I will get
          back to you as soon as possible!
        </p>
        <div>
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input type="text" className="input" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            className="input"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="input"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
