// import React, { useRef, useState } from "react";
// import ReactDOM from "react-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useOnClickRectOutside } from "../customHooks/useOnClickRectOutside";

// export default function Portal({ project, checkClick, isOpen }) {
//   const modalRef = useRef();
//   const [newIsOpen, setNewIsOpen] = useState(isOpen);

//   useOnClickRectOutside(modalRef, () => {
//     setNewIsOpen(false);
//     setTimeout(() => {
//       checkClick();
//     }, 500);
//   });

//   const variants = {
//     initial: {
//       // opacity: 0,
//     },
//     animate: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return ReactDOM.createPortal(
    
//     <motion.div
//     className="portal"
//     variants={variants}
//     animate={newIsOpen ? "animate" : "initial"}
//     exit="initial"
//     >
//       <AnimatePresence>
//       <motion.div 
//       ref={modalRef} 
//       initial={{y: 1000}}
//       exit={{bottom: '100%'}}
//       animate={{y: 0}}
//       transition={{duration:.5}}
//       className="portal__content">
//         <img
//           className="portal__image"
//           src={`/projects-images/${project.image}.webp`}
//           alt="project image"
//         />
//         <div className="portal__head">
//           <h2 className="portal__title">{project.title}</h2>
//           <h3 className="portal__subtitle">{project.subtitle}</h3>
//         </div>
//         <div className="portal__text">
//           {project.paragraphs.map((paragraph, i) => (
//             <p key={i}>{paragraph}</p>
//           ))}
//         </div>
//         <div className="link-icons">
//           <div className="link-icons__github">
//             <a href={project.urls[0].github} target="_blank">
//               <img className="link-img" src="icons/github.svg" alt="" />
//             </a>
//           </div>
//           <div className="link-icons__netlify">
//             <a href={project.urls[0].netlify} target="_blank">
//               <img className="link-img" src="icons/netlify.svg" alt="" />
//             </a>
//           </div>
//         </div>
//       </motion.div>
//       </AnimatePresence>
//     </motion.div>,
//     document.getElementById("portal")
//   );
// }
